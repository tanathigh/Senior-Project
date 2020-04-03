# PLC 

# Memory [D]
- D1=Pressure	(CH1) 	D2=Temp		(CH2) 	D3=Humid	(CH3) 	[PV input	]
- D10=Pressure	(CH1)	D20=Temp	(CH2)				[SV set	]
- D100(+28)	(CH1) 	D200(+28)	(CH2)				[PID Para	]
- D150		(CH1)	D250		(CH2)				[MV out	]
- D8015 	D8014	D8013 	represent to hr/min/sec	{Time	}

# Input Relay [X]
- X10 		represent to 	Comment test

# Output Relay [Y]		[Y0,Y1,Y2,Y3 can used PWM]
- Y0=Damp-on	Y1=Damp-off 	Y2=Blower 	Y4=Heater

# Auxiliary relay [M]
- M8000 represent to +
- M8002 represent to initial pulse
- M8012 represent to 100ms
- M10 represent to total error
- M20 represent to A2D value error
- M100(+2) are used for CMP of CH1=Y0,Y1

#PID Variables CH1
- D100[+28] : Sampling time = 1000 (1 sec)
- D101 : OP setting = 1 (backward)
- D123: 0
- 

Temp 
0-1v  = -30c-70c
อุณหภูมิ = (อนาล็อค/2) - 30
0	0v 	-30c
130	0.65v	 35c
200	1v 	 70c

Humidity
0-1v = 0%rh-100%rh
ความชื้น = (อนาล็อค/2)
0	0v	0%
100	0.5v	50%
200	1v	100%

Pressure
ความดัน = (อนาล็อค/200)
0	0v	0.3mbar
127	0.635v	
2000	10v	16mbar

PLC input 0-10V คือ 0-2000