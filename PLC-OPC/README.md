
# PLC 

# Memory [D]
- D1=Pressure	(CH1) 	D2=Temp		(CH2) 	D3=Humid	(CH3) 	[PV PLC	]
- D11=Pressure	(CH1) 	D12=Temp	(CH2) 	D13=Humid	(CH3) 	[PV OPC	]
- D10=Pressure	(CH1)	D20=Temp	(CH2)				[SV PLC	]
- D15=Pressure	(CH1)	D25=Temp	(CH2)				[SV OPC	]
- D100(+28)	(CH1) 	D200(+28)	(CH2)				[PID Para	]
- D150		(CH1)	D250		(CH2)				[MV out	]
- D8015 	D8014	D8013 	represent to hr/min/sec	{Time	}

# Comment
- X10 [off]

# Output Relay [Y]		[Y0,Y1,Y2,Y3 can used PWM]
- Y0=Damp-on	Y1=Damp-off 	Y2=Blower 	Y3=Heater

# Auxiliary relay [M]
- M8000 represent to +
- M8002 represent to initial pulse
- M8012 represent to 100ms
- M10 represent to total error
- M20 represent to A2D value error
- M100(+2) are used for CMP of CH1 Pressure PV>SV=Y0[on] PV<SV=Y1[off]

- M0 เปิดการทำงานของเครื่อง ซึ่งจะเปิดการทำงานของ Y2 (พัดลม+Blower)
- M1 ทำการ set ค่า SV ใน PLC ตาม SV input


#PID Variables CH1
- D100[+28] : Sampling time = 1000 (1 sec)
- D101 : OP setting = 1 (backward)
- D123: 0
- 

Pressure 			0-15 mbar
D11 = (D1*16)/2000
0	0v	0.3mbar
127	0.635v	
2000	10v	16mbar

Temp 			input 15-50 C
D22 = (D2/2) - 30
0	0v 	-30c
130	0.65v	 35c
200	1v 	 70c

Humidity
D33 = (D3/2)
0	0v	0%
100	0.5v	50%
200	1v	100%

PLC input 0-10V คือ 0-2000
4DA output +10V=+32000

Blower 
32000 = 50 Hz
x/640


100=x/16*2000
2=450

รับส่งข้อมูลกับ SCADA ข้อมูลบน OPC ต้องเป็นเลขแปลงแล้วทั้งหมด แปลงใน ladder ก่อนส่งไป