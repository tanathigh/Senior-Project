# WEBDEV

#Database 1 อันต่อ 1 บริษัท พนักงานหลายคน
1.พนักงาน
emp = [*emp-id,                         tinyint
        emp-name,                       varchar
        emp-mail,                       varchar
        emp-tel,                        varchar
        emp-password,                   varchar
        machine-id,                     tinyint //หมายเลขเครื่องที่มีสิทธิเข้าไปแก้ไขเครื่องได้
    ]
2.เครื่องจักรหลายเครื่อง
machine = [*machine-id,                 tinyint
            machine-type,               tinyint
            machine-name,               varchar
            ]
3.alarm เมื่อเกิดขัดข้องจากหลายเครื่องจักร
alarm = [  *alarm-id,                   tinyint
            alarm-time,                 datetime
            alarm-tag,                  varchar
            alarm-prior,                varchar
            alarm-quality,              varchar
            alarm-desc,                 varchar
            machine-id                  tinyint
            ]
4.มีค่าการทำงานของเครื่องจักรไว้ทำ History ทุกๆ 1 นาที
work = [*work-id,                       tinyint
        work-time,                      datetime
        work-pv1,                       tinyint
        work-pv2,                       tinyint
        work-pv3,                       tinyint
        work-sv1,                       tinyint
        work-sv2,                       tinyint
        work-sv3,                       tinyint
        machine-id                      tinyint
        ] 

#Function&UI
1.main
    -Login&Logout ได้
    -Home ไว้สำหรับเลือก machine
    -Alarm ไว้ดู alarm โดยรวมของทุก machine
    -Profile ไว้ edit profile
2.machine
    -Information ไว้ดูค่าต่างๆโดยรวม
    -History ไว้แสดงผลข้อมูลย้อนหลังของ machine นั้นๆ
    -Edit SV
    -Employee ไว้ดูรายชื่อและข้อมูลสำหรับติดต่อ