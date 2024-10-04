let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*🎯 قـائـمـه الـعـشـوائـيـات 🎯*'
            },
            body: {
              text: '*مرحبا بك/ي في قائمة العشوائيات*\n*رجاء قم باختيار الذي تريده من القائمه*\n*شـكـرا لـك عـلـى اسـتـخـدام الـبـوت*'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'اضغط هنا للأختيار 🎯',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'اختار اللي تريده 🌚',
                        rows: [
                          {
                            header: 'كريستيانو رونالدو',
                            title: 'رونالدو',
                            description: '',
                            id: '.رونالدو'
                          },
                          {
                            header: 'ليونيل ميسي',
                            title: 'ميسي',
                            description: '',
                            id: '.ميسي'
                          },
                          {
                            header: 'مستر كات',
                            title: 'قطه 🐈',
                            description: '',
                            id: '.قط'
                          },
                          {
                            header: 'طقم',
                            title: 'طقم ولد&بنت',
                            description: '',
                            id: '.طقم'
                          },
                          {
                            header: 'طقم بنات',
                            title: 'بنات',
                            description: '',
                            id: '.طقم1'
                          },
                          {
                            header: 'طقم اولاد',
                            title: 'اولاد',
                            description: '',
                            id: '.طقم2'
                          },
                          {
                            header: 'ميمز انمي',
                            title: 'ميمز',
                            description: '',
                            id: '.ميمز'
                          },
                          {
                            header: 'غنشن',
                            title: 'غنشن',
                            description: '',
                            id: '.غنشن'
                          },
                          {
                            header: 'نـيـزوكـو',
                            title: 'نيزوكو',
                            description: '',
                            id: '.نيزوكو'
                          },
                          {
                            header: 'لـولـي',
                            title: 'لولي',
                            description: '',
                            id: '.للولي'
                          },
                          {
                            header: 'لـولـي فيديو',
                            title: 'لولي-فيد',
                            description: '',
                            id: '.للولي-فيد'
                          },
                          {
                            header: 'ســاكــورا',
                            title: 'سـاكورا',
                            description: '',
                            id: '.ساكورا'
                          },
                          {
                            header: 'وايـفـو',
                            title: 'وايفو',
                            description: '',
                            id: '.وايفو'
                          },
                          {
                            header: 'نـيـكـو',
                            title: 'نيكو',
                            description: '',
                            id: '.نيكو'
                          },
                          {
                            header: 'غـوجـو سـاتـورا',
                            title: 'غــوجــو',
                            description: '',
                            id: '.صور-غوجو'
                          },
                          {
                            header: 'كيوراكو شينسوي',
                            title: 'كــيــوراكــو',
                            description: '',
                            id: '.صور-كيوراكو'
                          },
                          {
                            header: 'مايكي',
                            title: 'مــايــكــي',
                            description: '',
                            id: '.صور-مايكي'
                          },
                          {
                            header: 'اكـــيــامــا',
                            title: 'اكـيـامـا',
                            description: '',
                            id: '.اكياما'
                          },
                          {
                            header: 'انـــنـــا',
                            title: 'انـانـا',
                            description: '',
                            id: '.اننا'
                          },
                          {
                            header: 'كــوتــوري',
                            title: 'كوتوري',
                            description: '',
                            id: '.كوتوري'
                          },
                          {
                            header: 'اســونــا',
                            title: 'اســــونـــــا',
                            description: '',
                            id: '.اسونا'
                          },
                          {
                            header: 'ايــوزاوا',
                            title: 'ايــــوزاوا',
                            description: '',
                            id: '.ايوزاوا'
                          },
                          {
                            header: 'بــوروتــو',
                            title: 'بــورتــو',
                            description: '',
                            id: '.بوروتو'
                          },
                          {
                            header: 'نــاروتـــو',
                            title: 'نــاروتــو',
                            description: '',
                            id: '.ناروتو'
                          },
                          {
                            header: 'تــشــيــهــو',
                            title: 'تـشـيـهـو',
                            description: '',
                            id: '.تشيهو'
                          },
                          {
                            header: 'شــيــتــو',
                            title: 'شـيـتـوجـي',
                            description: '',
                            id: '.شيتو'
                          },
                          {
                            header: 'ديــدارا',
                            title: 'ديـدارا',
                            description: '',
                            id: '.ديدارا'
                          },
                          {
                            header: 'ايــتــاشــي',
                            title: 'إيــتــاشــي',
                            description: '',
                            id: '.إيتاشي'
                          },
                          {
                            header: 'كــورومـــي',
                            title: 'كورومي',
                            description: '',
                            id: '.كورومي'
                          },
                          {
                            header: 'ايـــبـــا',
                            title: 'ايـبـا',
                            description: '',
                            id: '.ايبا'
                          },
                          {
                            header: 'الــيــنــا',
                            title: 'اليـنـا',
                            description: '',
                            id: '.الينا'
                          },
                          {
                            header: 'ايــمــيــلــي',
                            title: 'ايـمـيـلـي',
                            description: '',
                            id: '.ايميلي'
                          },
                          {
                            header: 'ايــرزا',
                            title: 'ايـرزا',
                            description: '',
                            id: '.ايرزا'
                          },
                          {
                            header: 'هـيـسـتـيـا',
                            title: 'هيستيا',
                            description: '',
                            id: '.هيستيا'
                          },
                          {
                            header: 'هــيــنــتــا',
                            title: 'هـيـنـاتـا',
                            description: '',
                            id: '.هيناتا'
                          },
                          {
                            header: 'كــانــيــكــي',
                            title: 'كـانـيـكـي',
                            description: '',
                            id: '.كانيكي'
                          },
                          {
                            header: 'ايــتــوري',
                            title: 'ايـتـوري',
                            description: '',
                            id: '.ايتوري'
                          },
                          {
                            header: 'كـــاغـــا',
                            title: 'كـاغـا',
                            description: '',
                            id: '.كاغا'
                          },
                          {
                            header: 'كــاغــورا',
                            title: 'كـاغـورا',
                            description: '',
                            id: '.كاغورا'
                          },
                          {
                            header: 'ايــنــوري',
                            title: 'ايـنـوري',
                            description: '',
                            id: '.اينوري'
                          },
                          {
                            header: 'كــاوري',
                            title: 'كـاوري',
                            description: '',
                            id: '.كاوري'
                          },
                          {
                            header: 'ســاغــري',
                            title: 'سـاغـري',
                            description: '',
                            id: '.ساغري'
                          },
                          {
                            header: 'مــيــكــاســا',
                            title: 'مـيكـاسـا',
                            description: '',
                            id: '.ميكاسا'
                          },
                          {
                            header: 'مــادارا',
                            title: 'مـادارا',
                            description: '',
                            id: '.مادارا'
                          },
                          {
                            header: 'مــيــنــاتــو',
                            title: 'مـيـنـاتـو',
                            description: '',
                            id: '.ميناتو'
                          },
                          {
                            header: 'مـــــيـــكــــو',
                            title: 'مــيــكــو',
                            description: '',
                            id: '.ميكو'
                          },
                          {
                            header: 'ايــســوزو',
                            title: 'ايـسـوزو',
                            description: '',
                            id: '.ايسوزو'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['قسم-العشوائيه']

export default handler
