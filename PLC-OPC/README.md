# PLC Ladder

# General Variables
# Memory [D]
- D1 D2 D3 represent to Input channel 1 2 3 [PV]
- D4 
- D10 D20 D30 represent to setting value for channel 1 2 3 [SV]
- D100(+28) represent to channel 1 parameter for PID control
- D150 represent to channel 1 analog output [MV]
- D8015 D8014 D8013 represent to hr/min/sec
# Input Relay [X]
- X10 is used for comment test the ladder
# Output Relay [Y]
- Y1 Y2 Y3 represent to Output channel 1 2 3
# Auxiliary relay [M]
- M8000 represent to +
- M8002 represent to initial pulse
- M8012 represent to 100ms
- M10 represent to total error
- M20 represent to A2D value error
- M200(+2) M300(+2) are used for CMP of Y2 Y3 
- M100 is used for comment test the ladder
# Output
- M100 Y0
- M101 Y1
- M102 Y2

- M104 Y4
- M105 Y5



#PID Variables CH1
- D100[+28] : Sampling time = 1000 (1 sec)
- D101 : OP setting = 1 (backward)
- D123: 0
- 

Temp
26 123
38 130
40 132
