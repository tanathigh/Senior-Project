# Senior-Project
---------------------------------------------------------------------- PLC-ladder ----------------------------------------------------------------------
# Memory [D]
- D1 D2 D3 represent to Input channel 1 2 3 [PV]
- D4 
- D10 D20 D30 represent to setting value for channel 1 2 3 [SV]
- D100(+28) represent to channel 1 parameter for PID control
- D150 represent to channel 1 analog output [MV]

# Input Relay [X]
- X10 is used for comment the ladder

# Output Relay [Y]
- Y1 Y2 Y3 represent to Output channel 1 2 3

# Auxiliary relay [M]
- M8000 represent to +
- M8002 represent to initial pulse
- M8012 represent to 100ms
- M10 represent to total error
- M20 represent to A2D value error
- M200(+2) M300(+2) are used for CMP of Y2 Y3 