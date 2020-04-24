# SCADA โปรแกรมต่างๆทำอะไร [ยังไม่ลง detail config]
1.GraphworX 		- ไว้ทำส่วนของ UI การจัดการเครื่อวใน local network หรือในโรงงาน
2.Unified Data Manager 	- เชื่อมต่อ OPC Server เข้ากับ SCADA Server (ซึ่งจะเข้ากับ db mssql ด้วย) + ทำ Recipe (ตั้งค่า SV) 
3.Data Mining 		- ดึงข้อมูลจาก db server ของ mssql เข้ามาใน SCADA Server
#ไม่ได้ใช้แล้ว
-TrendworX32	= ทำ DB Logging ลงใน database ในตาราง dbo.lg
-PersistentTrend	= เซฟ DB Logging เป็นไฟล์ .csv สำหรับ History Chart ในโปรแกรม SCADA
-Unified Data	= เชื่อมต่อ Data จาก Server ไปอีก Server 

#Featue
1.Realtime Monitoring
2.Set SV
3.PV Graph

ส่งงานที่ทำให้คนนอกดูรู้เรื่อง

#report aim = คนที่ไม่ได้อยู่ใน field มาอ่านแล้วยังเข้าใจว่าทำอะไร, เป็น Doc ที่คนอ่านแล้วมาทำต่อได้
intro
realated work
implementation
timeline
budget
evaluation & difficulties
conclusion - improvement future work

#vdo presentation = ทำให้คนข้างนอกดูแล้วเข้าใจ มีสคริป
