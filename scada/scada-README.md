# SCADA โปรแกรมต่างๆทำอะไร [ยังไม่ลง detail config]
1.GraphworX 		= ไว้ทำส่วนของ UI การจัดการเครื่อวใน local network หรือในโรงงาน
2.Unified Data Manager 	= เชื่อมต่อ OPC Server เข้ากับ SCADA Server (ซึ่งจะเข้ากับ db mssql ด้วย) + ทำ Recipe (ตั้งค่า SV) 
#ไม่ได้ใช้แล้ว
-Data Mining 		= ดึงข้อมูลจาก db server ของ mssql เข้ามาใน SCADA Server
-Unified Data Manager 	= เชื่อมต่อ OPC Server เข้ากับ SCADA Server (ซึ่งจะเข้ากับ db mssql ด้วย) + ทำ Recipe (ตั้งค่า SV) 
-TrendworX32		= ทำ DB Logging ลงใน database ในตาราง dbo.lg
-PersistentTrend		= เซฟ DB Logging เป็นไฟล์ .csv สำหรับ History Chart ในโปรแกรม SCADA
-Unified Data		= เชื่อมต่อ Data จาก Server ไปอีก Server 
-Alarm Server Configurator	= ทำ

#Featue
1.Realtime Monitoring
2.Set SV
3.PV Graph
