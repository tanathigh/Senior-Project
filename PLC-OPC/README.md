# PLC 

# Memory [D]
- D0=Ini Temp								[PV ini]
- D1=Pressure	(CH1) 	D2=Temp		(CH2) 	D3=Humid	(CH3) 	[PV ]
- D11=Pressure	(CH1) 	D12=Temp	(CH2) 	D13=Humid	(CH3) 	[PV LG	]
- D10=Pressure	(CH1)	D20=Temp	(CH2)				[SV ]
- D100(+28)	(CH1) 	D200(+28)	(CH2)				[PID Para	]
- D150		(CH1)	D250		(CH2)				[MV out	]
- D8015 	D8014	D8013 	represent to hr/min/sec				[Time	]

# Comment
- X1000 		[Comment Off]

# Output Relay [Y]		[Y0,Y1,Y2,Y3 can used PWM]
- Y0=Damp-on	Y1=Damp-off 	Y2=Pump		Y3=Heater	Y4=Blower 	Y5=Fan+Light
- Y0=Damp-on	Y2=Pump		Y3=Heater	Y4=Blower 	Y5=Fan+Light	Y6=Damp-off

# Auxiliary relay [M]
- M8000 represent to +
- M8002 represent to initial pulse
- M8012 represent to 100ms
- M10 represent to total error
- M20 represent to A2D value error
- M100(+2) are used for CMP of CH1 Pressure 		PV>SV=Y0[on]	PV<SV=Y1[off]
- M110(+2) are used for CMP of CH2 Temperature 	Control MV2
- M120(+2) are used for CMP of CH2 Temperature 	Compare SV&IV
- M130(+2) are used for CMP of CH2 Temperature 	Compare SV&PV
- M0 เปิดการทำงานของเครื่อง ซึ่งจะเปิดการทำงานของ Y2 (พัดลม+Blower)
- M1000 	[Test On-Off]
- X2000 	[Comment Off]

# PID Variables CH1
- D100[+28] : Sampling time = 1000 (1 sec)
- D101 : OP setting = 1 (backward)
- D123: 0

PLC input 0-10V คือ 0-2000
4DA output +10V=+32000

Pressure 		= D1/20
MIN	0	0v	0 Pa
MAX	2000	10v	100 Pa
PMIN	90		5 Pa
PMAX	600		30 Pa

Temp 		= (D2/2) - 30
MIN	0	0v 	-30c
MAX	200	1v 	 70c
PMIN	90		15c
PMAX	140		40c

Ini Temp
PMIN	100		20c
PMAX	130		35c

Humidity		= (D3/2)
MIN	0	0v	0%
MAX	200	1v	100%

Blower 			32000 = 50 Hz
Hz = D150/640

-พัดลมไม่สามารถดึงความเย็นออกมาได้ดีพอ
-ไม่ได้ใช้ AHU ในการทำความเย็นมากๆได้

1.ควบคุมความดัน
	- จะควบคุมความดัน โดยวัดค่า PV จากเซนเซอร์วัดความดัน และเมื่อผู้ใช้งานทำการเซตค่า SV ระบบจะคำนวณค่าโดยใช้ PID และสั่งการ inverter ให้ไปปรับความเร็วมอเตอร์ blower
2.ควบคุมอุณหภูมิ
	- ระบบจะทำการเก็บค่าอุณหภูมิโดยรอบห้องไว้ ณ ครั้งแรกที่เปิดใช้งานเครื่อง (D4 = IV) และรอการปรับค่า SV
	case1	- [SV<PV		SV>IV		] เมื่อเกิดการ overshoot + ลดอุณหภูมิลงแต่ยังมากกว่า IV 	-> Damper จะเปิด (+ Pump จะทำงาน)
	case2	- [SV>PV+		SV>IV		] ตั้งอุณหภูมิสูงขึ้นมากกว่า IV 				-> Damper จะปิด + Heater จะทำงาน
	case3	- [SV<PV-		SV<IV	PV>IV	] ลดอุณหภูมิลง มีความร้อนสะสมในกล่อง			-> Damper จะเปิด + Pump จะทำงาน  
		- [SV<PV-		SV<IV	PV<IV	] ลดอุณหภูมิลง					-> Damper จะปิด + Pump จะทำงาน  

		- [SV>PV	&&SV<IV] ลดอุณหภูมิลง overshoot					-> ไม่ทำอะไร
	- ค่าที่ใช้ PV ที่ใช้ CMP จะ
		- PV+	= PV+1 		D21
		- PV- 	= PV-1		D22

ปัญหา
	-ใส่ Y1 พร้อม Pump ไม่ได้ใน case3