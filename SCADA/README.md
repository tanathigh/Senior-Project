# SCADA โปรแกรมต่างๆทำอะไร [ยังไม่ลง detail config]
1.GraphworX 		- ไว้ทำส่วนของ UI การจัดการเครื่อวใน local network หรือในโรงงาน
2.Unified Data Manager 	- เชื่อมต่อ OPC Server เข้ากับ SCADA Server (ซึ่งจะเข้ากับ db mssql ด้วย) + ทำ Recipe (ตั้งค่า SV) 
3.Data Mining 		- ดึงข้อมูลจาก db server ของ mssql เข้ามาใน SCADA Server
4.TrendworX32		- ทำ DB Logging ลงใน database ในตาราง dbo.lg
5.PersistentTrend		- เซฟ DB Logging เป็นไฟล์ .csv สำหรับ History Chart ในโปรแกรม SCADA
