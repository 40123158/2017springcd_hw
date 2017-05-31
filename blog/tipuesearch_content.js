var tipuesearch = {"pages":[{"url":"./pages/about/","tags":"misc","title":"About","text":"2017Spring 機械設計工程系協同產品設計實習 課程倉儲: http://github.com/mdecourse/2017springcd 課程投影片: http://mdecourse.github.io/2017springcd 課程網誌: http://mdecourse.github.io/2017springcd/blog"},{"url":"./Week13.html","tags":"Course","title":"2017-05/17 Week13","text":""},{"url":"./Week12.html","tags":"Course","title":"2017-05/10 Week12","text":""},{"url":"./Week11.html","tags":"Course","title":"2017-05/03 Week11","text":""},{"url":"./期中考.html","tags":"Course","title":"2017-04/19 期中考","text":"(一) Fossil Server 實習查驗 各組利用電腦輔助設計室中的電腦, 重新建立一台以 https 為連結協定的 Fossil Server。 而各組員分別在 Wiki 中以 [學號] 期中學習心得 為 Wiki 頁面標題, 概述上課至今的心得與自評成績。 本組 Serve 的 ip 位址 : https://mde2a2.kmol.info/midterm/bg1/wcontent (二) 四連桿機構協同 Trace Point 查驗 在各組網誌中, 以子模組 (Github Submodule) 的設定, 擷取各組員倉儲中的 T 點軌跡座標檔後, 進行網際協同繪圖. Vimeo影片 NFU-機械設計系-協同產品設計-40123158 (二) from 蔡宗霖 on Vimeo . youtube影片 (三) Fourbar Walker OnShape 零件協同繪圖與組立查驗 請各組依照題目給予的基本尺寸規劃, 以協同方式在 OnShape 環境中完成四連桿四足行走機構, 並分別拍攝協同規劃與實際操作影片, 將影片送到 1) Youtube 2) Vimeo 以及各組的 Fossil Server。 Onshape繪製連趕機構 : https://cad.onshape.com/documents/58f6c26243854b103b6a124f/w/142c1771cd95a7267a56b5c3/e/cece68b3829558ae87b1324c Vimeo影片 NFU-機械設計系-協同產品設計-40123158 (三) from 蔡宗霖 on Vimeo . Vimeo影片 - 機構作動動畫 NFU-機械設計系-協同產品設計-40123158 (三 - 機構作動動畫) from 蔡宗霖 on Vimeo . youtube影片 youtube影片 - 機構作動動畫 (四) 分組協同零件展示 將以所指定的 Ethercalc 即時表單, 取各學員的期中自評成績。 將各組完成的四足行走機構, 轉為 STL 格式, 利用下列 viewer, 將機構展示在各組的網誌中。"},{"url":"./Week 8.html","tags":"Course","title":"2017-04/12 Week 8","text":"小組互評: https://pygroup-ag100.rhcloud.com 個人自評: http://mde1a2.kmol.info:8000/k96tgzh1ofbl"},{"url":"./Week 6.html","tags":"Course","title":"2017-03/29 Week 6","text":"將Onshape繪製的連趕機構匯入Vrep 2017-04-12_10-52-31 from 蔡宗霖 on Vimeo ."},{"url":"./Week 5.html","tags":"Course","title":"2017-03/22 Week 5","text":"利用Onshape繪製連趕機構 Onshape檔案位置 https://cad.onshape.com/documents/4551637bcc9f5baec90cbd70/w/c1f35154ab9c39e3768419bc/e/5ccbaf9ba52ca9e9d2221fd0 Fossil SCM 與 Stunnel 啟動整合 1. 更改 Start.bat 設定 REM tiny2017 主要針對初學 Python3 與 C 學員所建立 REM 近端使用 fossil 管理資料版本, 並且定時轉為 git 格式後上傳到 github @echo off REM 設定 y 硬碟代號與 data 目錄對應 set Disk=y subst %Disk%: \"data\" REM 設定 leo 相關對應 Home 位置 set HomePath=%Disk%:\\home set HomeDrive=%Disk%:\\home set Home=%Disk%:\\home REM 將系統 Python 程式的 io 設為 utf-8 set PYTHONIOENCODING=\"utf-8\" REM 將後續的指令執行, 以 %Disk% 為主 %Disk%: REM 設定 PYTHONPATH set PYTHONPATH=%Disk%:\\python-3.5.3-embed-amd64 REM 設定 Leo 所用的編輯器 set LEO_EDITOR=%Disk%:\\wscite\\SciTE.exe REM for fossil https 連線設定 set HTTPS=on REM 指令搜尋路徑設定 set path1=%PATH%;%Disk%:;%Disk%:\\python-3.5.3-embed-amd64;%Disk%:\\git\\bin;%Disk%:\\stunnel\\bin;%Disk%:\\sqlite-tools;%Disk%:\\python-3.5.3-embed-amd64\\Scripts;%Disk%:\\portablegit\\bin; set path2=c:\\Windows\\Microsoft.NET\\Framework\\v3.5;%Disk%:\\python-3.5.3-embed-amd64\\Lib\\site-packages; set path3=\"C:\\Program Files (x86)\\Google\\Chrome\\Application\" path=%path%;%path1%;%path2%;%path3% start /MIN %Disk%:\\wscite\\SciTE.exe start /MIN cmd.exe start /MIN cmd.exe start /MIN cmd.exe REM 啟動 Leo 編輯器 REM %Disk%:\\Miniconda3\\python.exe %Disk%:\\apps\\launchLeo.py REM 啟動 stunnel start /MIN fossil.exe server -P 127.0.0.1:8080 %Disk%:\\tmp\\fossil_repo\\2017springcd_bg1.fpssil REM 取得電腦 IP, 然後設定 %Disk%:/stunnel/config/stunnel.conf for /f \"delims=[] tokens=2\" %%a in ('ping -4 -n 1 %ComputerName% &#94;| findstr [') do set NetworkIP=%%a REM echo Network IP: %NetworkIP% REM Saved in %Disk%:\\stunnel\\config\\stunnel.conf @echo off REM 建立 stunnel.conf @echo [https] > %Disk%:\\stunnel\\config\\stunnel.conf REM 附加資料 @echo accept = %NetworkIP%:443 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo connect = 127.0.0.1:8080 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo TIMEOUTclose = 0 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo cert = %Disk%:\\stunnel\\config\\localhost.crt >> %Disk%:\\stunnel\\config\\stunnel.conf @echo key = %Disk%:\\stunnel\\config\\localhost.key >> %Disk%:\\stunnel\\config\\stunnel.conf REM 啟動 stunnel start /MIN stunnel.exe REM 以 chrome 連線到 https://%NetworkIP%:443 chrome https://%NetworkIP% chrome https://mde2a2.kmol.info/cdbg1 Exit 2. 檢查是否有相對應的 fossil 檔案 start /MIN fossil.exe server -P 127.0.0.1:8080 %Disk%:\\tmp\\fossil_repo\\2017springcd_bg1.fpssil 3. 自己額外在最後一行, 新增一個指令 chrome https://mde2a2.kmol.info/cdbg1 建立與 project name 同名的首頁 wiki https://mde2a2.kmol.info/cdbg1 從 SolveSpace 匯出 onebar 並在 V-rep 加入馬達 SolveSpacec 匯出: 影片 V-rep 加入馬達: 影片"},{"url":"./Week 4.html","tags":"Course","title":"2017-03/15 Week 4","text":"建立各組協同主機 2017springcd_bg1: https://mde2a2.kmol.info/cdbg1 單桿機構 機械設計工程系-協同產品設計實習課程: V-rep Python Remote API 設定單軸旋轉臂旋轉角度範例 from 虎尾科大機械設計工程 on Vimeo ."},{"url":"./Week 3.html","tags":"Course","title":"2017-03/18 Week 3","text":"HyperWorks 14.0 Student Edition Student Edition: Download Now! 本週 Homework 訓練英聽能力，並試著寫出以下 HyperWorks 介紹影片 的英文字幕並翻譯。 聽寫英文字幕: Over the years , we have assembled a quite portfolio of solution technology. We're going from Structures or Crash Safety , Thermal , Fluid Dynamics , Systems Simulation , all the way to Electro-Magnetic Simulation. Our specialty is connecting all these different disciplines through Multiphyxics Optimization. We're using simulation technology to drive innovation . To create new products. The key enables of our simulation driven innovation and of technology focus is optimization technology first then the Broad Portfolio of Physics and Computation Performance. We made our name OptiStruct's topology optimization. Throughout the years focusing on concept design and we are now coming out with lattice structure optimization. We still put a lot of energy and composites design and optimization We always keep improving and advancing the nonlinear capabilities of our districts or non-linear durability. We now have finite sliding contact. So you can do things like a gear simulation and of course for the automotive industry our noise and vibration and acoustics are very advanced and I think we are the leading technology here with destruct also an audience we we focus a lot of contact simulation that we have contact simulation artists are contact simulation new contact types and audios for electronic drug testing we developed a fluid structure interaction we're back simulation or airplane ditching and their plane landing in water all these are multidisciplinary technologies are or multiphysics and heat transfer analysis we have a very complete solution now giving you a steady state and transient capabilities one additional focus in in multiphysics simulation is as materials in audience we developed extended finite element technology to model things that glass breakage for example and we also did the just recently an acquisition and the products will be multiscale designer where we can look at the Michael structure of the materials and then derive analytically material property so we can look at things like fatigue statistical distribution of fibers we can look at failure progressive failure how the material actually fails we have really good technology. 1. 更改 Start.bat 設定 近端 Fossil 1. 更改 Start.bat 設定 REM tiny2017 主要針對初學 Python3 與 C 學員所建立 REM 近端使用 fossil 管理資料版本, 並且定時轉為 git 格式後上傳到 github @echo off REM 設定 y 硬碟代號與 data 目錄對應 set Disk=y subst %Disk%: \"data\" REM 設定 leo 相關對應 Home 位置 set HomePath=%Disk%:\\home set HomeDrive=%Disk%:\\home set Home=%Disk%:\\home REM 將系統 Python 程式的 io 設為 utf-8 set PYTHONIOENCODING=\"utf-8\" REM 將後續的指令執行, 以 %Disk% 為主 %Disk%: REM 設定 PYTHONPATH set PYTHONPATH=%Disk%:\\python-3.5.3-embed-amd64 REM 設定 Leo 所用的編輯器 set LEO_EDITOR=%Disk%:\\wscite\\SciTE.exe REM for fossil https 連線設定 set HTTPS=on REM 指令搜尋路徑設定 set path1=%PATH%;%Disk%:;%Disk%:\\python-3.5.3-embed-amd64;%Disk%:\\git\\bin;%Disk%:\\stunnel\\bin;%Disk%:\\sqlite-tools;%Disk%:\\python-3.5.3-embed-amd64\\Scripts;%Disk%:\\portablegit\\bin; set path2=c:\\Windows\\Microsoft.NET\\Framework\\v3.5;%Disk%:\\python-3.5.3-embed-amd64\\Lib\\site-packages; path=%path%;%path1%;%path2% start /MIN %Disk%:\\wscite\\SciTE.exe start /MIN cmd.exe start /MIN cmd.exe start /MIN cmd.exe REM 啟動 Leo 編輯器 REM %Disk%:\\Miniconda3\\python.exe %Disk%:\\apps\\launchLeo.py REM 啟動 stunnel start /MIN fossil.exe server -P 127.0.0.1:8080 %Disk%:\\tmp\\fossil_repo\\2017springcd_hw.fpssil REM 取得電腦 IP, 然後設定 %Disk%:/stunnel/config/stunnel.conf for /f \"delims=[] tokens=2\" %%a in ('ping -4 -n 1 %ComputerName% &#94;| findstr [') do set NetworkIP=%%a REM echo Network IP: %NetworkIP% REM Saved in %Disk%:\\stunnel\\config\\stunnel.conf @echo off REM 建立 stunnel.conf @echo [https] > %Disk%:\\stunnel\\config\\stunnel.conf REM 附加資料 @echo accept = %NetworkIP%:443 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo connect = 127.0.0.1:8080 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo TIMEOUTclose = 0 >> %Disk%:\\stunnel\\config\\stunnel.conf @echo cert = %Disk%:\\stunnel\\config\\localhost.crt >> %Disk%:\\stunnel\\config\\stunnel.conf @echo key = %Disk%:\\stunnel\\config\\localhost.key >> %Disk%:\\stunnel\\config\\stunnel.conf REM 啟動 stunnel start /MIN stunnel.exe Exit 2. 在tmp裏的 fossil_repo 目錄執行指令 fossil init 2017springcd_hw.fpssil 3. 查詢 IP ipconfig /all 4. 確認是否有用 Proxy , 若有則需要將自己的IP設為例外 5. 使用瀏覽器輸入網址 https:// 電腦IPv4的IP Fourbar 零件繪製 Link_30: SolveSpace Onshape 尺寸圖 Link_50: SolveSpace Onshape 尺寸圖 Link_60: SolveSpace Onshape 尺寸圖 Fourbar組裝: SolveSpace Onshape 外加正三角形: 尺寸圖 路徑圖 心得 反覆英聽n次；由於太久沒練，忘記許多單字拼法。"},{"url":"./Week 2.html","tags":"Course","title":"2017-03/01 Week 2","text":"利用 Solvespace 畫出簡單的四連桿機構, 觀察該機構的運動方式, 也可以匯出到 V-rep 進行動態模擬 2017-03-01_11-31-56 from 蔡宗霖 on Vimeo . 分組座位原始碼 #import os adata = open(\"w2b_cadlab.txt\", encoding=\"utf-8\").read() #讀取w2b_cadlab.txt 檔案,讓裡面的內容成為資料, 因為檔案裡有中文, 所以設定encoding 使用utf-8 的編驛碼 rdata = open(\"w2b_registered.txt\", encoding=\"utf-8\").read().splitlines() #print(adata) #用print 先檢查資料是否是我們需要的 alist = adata.splitlines() #利用splitlines 的方法把資料隔開, 就可以得到一個特定的數列 #print(alist[2]) n = 0 row = 0 final_list = [] w2_list = [] for stud_num in alist[2:]: #從第2列開始, 因為第0列和第1列都不是我們要的 row = row + 1 blist = stud_num.split(\"\\t\") #print(blist) column = 0 #為了避免序號連續, 利用column = 0 將順序重製, 因為每一列算完之後要換下一列重新開始 for i in range(len(blist)): column = column + 1 if blist[i] != \"\": #print(blist[i]) clist = blist[i].split(\"_\") stud_data = clist[0]+\"_\"+clist[1]+\"_\"+str(row)+\"_\"+str(column) final_list.append(stud_data) w2_list.append(clist[1]) n = n +1 # 根據數列前導字串排序, 目的在建立分組數列 group_list = sorted(final_list) print(\"分組名單:\") for i in range(len(group_list)): print(group_list[i]) print(\"座位列表:\") for i in range(len(final_list)): print(final_list[i]) for i in range(len(rdata)): if rdata[i] not in w2_list: print(\"缺席學生:\", rdata[i]) print(\"學生總數:\", n) #print(os.environ) Fourbar 心得 利用 Solvespace 畫出簡單的四連桿機構, 觀察該機構的運動方式, 也可以匯出到 V-rep 進行動態模擬"},{"url":"./Week 1.html","tags":"Course","title":"2017-02/22 Week 1","text":"修改 stunnel.conf 的 IP 設定 20170222_113310 from 蔡宗霖 on Vimeo . 心得: 雖然瞭解老師理念.. 但很久沒碰了，很生疏.."}]};