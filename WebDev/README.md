# WEBDEV

#Database 1 อันต่อ 1 บริษัท
-พนักงานหลายคนคุม
emp = [
    *emp-id,                            tinyint
    emp-name,                           varchar
    emp-mail,                           varchar
    emp-password,                       varchar
    emp-tel                             varchar
    ]

-มีเครื่องจักรหลายเครื่อง
machine = [*machine-id,                 tinyint
            machine-type,               tinyint
            machine-name                varchar
            ]

-มี alarm เมื่อเกิดขัดข้องจากหลายเครื่องจักร
alarm = [   *alarm-id,                  tinyint
            alarm-time,                 datetime
            alarm-tag,                  varchar
            alarm-prior,                varchar
            alarm-quality,              varchar
            alarm-desc,                 varchar
            machine-id                  tinyint
            ]

-มีค่าการทำงานของเครื่องจักรไว้ทำ History ทุกๆ 1 นาที
work = [*work-id,                       tinyint
        work-time,                      datetime
        work-pv1,                       tinyint
        work-pv2,                       tinyint
        work-pv3,                       tinyint
        work-sv1,                       tinyint
        work-sv2,                       tinyint
        work-sv3,                       tinyint
        work-employee,                  varchar
        machine-id                      tinyint
        ] 

#UI

//ยังไม่ได้เลือก machine

-Home ไว้เลือก machine
:: machine 

-Profile ไว้ edit employee profile
:: emp 

//เลือก machine แล้ว

-History ไว้แสดงผลข้อมูลย้อนหลัง
:: work

-Employee ไว้เช็คชื่อผู้คุมเครื่องจักร
:: work :: work-employee