'use strict';

/* ════════════════════════════════════════════════
   DATA — Preserved from original
   ════════════════════════════════════════════════ */
const SRV={
  security:{id:'security',title:'الأمن والحراسة',img:'assets/images/services_security_1782532380373.jpg',
    fallback:'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
    short:'منظومة أمنية متكاملة تعمل على مدار الساعة لضمان سلامة وأمن جميع ساكني الكومباوند.',
    long:`تُعدّ منظومة الأمن والحراسة في العروبة سكوير من أبرز ما يميز هذا المشروع العملاق عن غيره من المشاريع السكنية في مصر. إذ نحرص على توفير أعلى مستويات الأمان لجميع ساكني الكومباوند من خلال توظيف أفضل الكوادر الأمنية المدربة على أعلى المستويات المحلية والدولية.

تعمل بواباتنا الذكية على مدار الـ 24 ساعة طوال أيام الأسبوع، مزودة بأحدث أنظمة التعرف على الوجوه وبطاقات الدخول الذكية وكاميرات المراقبة عالية الدقة. يضم فريق الأمن لدينا أكثر من 150 عنصراً أمنياً مدرباً يتوزعون على نقاط المراقبة والبوابات الرئيسية والفرعية.

كما نوفر غرفة تحكم مركزية متطورة تعمل بأحدث تقنيات المراقبة والرصد اللحظي لجميع أرجاء الكومباوند، مع أنظمة إنذار متكاملة وخطط طوارئ واضحة لمواجهة أي طارئ.`,
    feats:[
      {t:'بوابات دخول ذكية متطورة',d:'أنظمة دخول إلكترونية تعمل بتقنية التعرف على الوجوه وبطاقات RFID الذكية لكل ساكن.'},
      {t:'كاميرات مراقبة 4K',d:'شبكة كاملة من كاميرات المراقبة عالية الدقة تغطي جميع المساحات العامة والمداخل والمخارج.'},
      {t:'فريق أمن مدرب 24/7',d:'أكثر من 150 عنصراً أمنياً مدرباً يعملون بنظام النوبات على مدار الساعة.'},
      {t:'غرفة عمليات مركزية',d:'مركز تحكم متطور يراقب جميع أرجاء الكومباوند لحظة بلحظة مع إمكانية التدخل الفوري.'},
      {t:'أنظمة إنذار مبكر',d:'منظومة إنذار مبكر متكاملة ضد الحرائق والاختراق مرتبطة بمركز العمليات والدفاع المدني.'},
      {t:'مواقف سيارات محمية',d:'جراجات تحت الأرض مزودة بكاميرات مراقبة وبوابات إلكترونية وإضاءة طوارئ دائمة.'}
    ]},
  commercial:{id:'commercial',title:'المنطقة التجارية',img:'assets/images/services_commercial_1782532395035.jpg',
    fallback:'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=80',
    short:'منطقة تجارية راقية متكاملة تضم كبرى العلامات التجارية العالمية والمحلية على مساحة شاسعة.',
    long:`تتميز المنطقة التجارية في العروبة سكوير بتصميم معماري حديث يجمع بين الجمال الجمالي والكفاءة الوظيفية، حيث تمتد على مساحة تزيد عن 50 ألف متر مربع من المحلات التجارية والمعارض الفاخرة.

تضم المنطقة التجارية أكثر من 200 محل تجاري تمثل كبرى العلامات التجارية العالمية والمحلية في مجالات الملابس والأحذية والإكسسوارات والإلكترونيات والمجوهرات وغيرها. إلى جانب مجموعة متميزة من المطاعم والمقاهي العالمية التي تقدم تجربة طعام فريدة لساكني الكومباوند وزوارهم.

تتوفر في المنطقة التجارية مساحات مخصصة للعروض والفعاليات التجارية والثقافية، مع خدمات الصراف الآلي والبنوك ومحلات الخدمات اليومية لتلبية جميع احتياجات العائلة.`,
    feats:[
      {t:'أكثر من 200 محل تجاري',d:'تشكيلة واسعة من المحلات تمثل كبرى العلامات العالمية والمحلية المتميزة.'},
      {t:'مطاعم ومقاهي عالمية',d:'أكثر من 40 مطعماً ومقهى يقدمون أشهى المأكولات العالمية والشرقية في أجواء فاخرة.'},
      {t:'خدمات مصرفية متكاملة',d:'فروع البنوك وماكينات الصراف الآلي متوفرة في أكثر من موقع داخل المنطقة التجارية.'},
      {t:'مواقف سيارات مجانية',d:'آلاف أماكن وقوف السيارات الموزعة في الطوابق السفلية وعلى مستوى الأرض.'},
      {t:'عروض وفعاليات دورية',d:'تنظيم عروض وفعاليات تجارية وترفيهية دورية داخل المنطقة التجارية طوال العام.'},
      {t:'واي فاي مجاني في الكل',d:'تغطية كاملة بالإنترنت المجاني في جميع أرجاء المنطقة التجارية والممرات.'}
    ]},
  mall:{id:'mall',title:'المول التجاري',img:'assets/images/services_mall_1782532413315.jpg',
    fallback:'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80',
    short:'مول تجاري ضخم متعدد الطوابق يضم كارفور هايبرماركت وسينمات وألعاب وتسوق في مكان واحد.',
    long:`يُعدّ المول التجاري في العروبة سكوير وجهة الترفيه والتسوق الأولى للعائلات بأكملها، حيث يمتد على مساحة إجمالية تزيد عن 120 ألف متر مربع موزعة على 5 طوابق متكاملة تضم كل ما تحتاجه العائلة.

يضم المول فرعاً ضخماً من هايبرماركت كارفور العالمي يمتد على مساحة 8000 متر مربع ويوفر أكثر من 50 ألف منتج غذائي ومنزلي وإلكتروني. كما يحتوي على مجمع سينمائي حديث يضم 12 قاعة عرض مزودة بأحدث تقنيات الصوت والصورة.

خُصصت منطقة كاملة لألعاب الأطفال والناشئين تحتوي على أحدث الألعاب التفاعلية وصالات البولينج والتسلق وغيرها. وتنتشر في أرجاء المول أكثر من 60 مطعماً ومقهى في منطقة المأكولات الشهيرة.`,
    feats:[
      {t:'كارفور هايبرماركت',d:'فرع ضخم من كارفور يمتد على 8000 متر مربع بأكثر من 50 ألف منتج متنوع بأسعار تنافسية.'},
      {t:'مجمع سينمائي 12 قاعة',d:'سينمات بأحدث تقنيات IMAX وDolby Atmos لتجربة مشاهدة استثنائية لا مثيل لها.'},
      {t:'ملاهي ومنطقة ألعاب',d:'منطقة ترفيه متكاملة بأحدث الألعاب الإلكترونية وألعاب الأطفال والبولينج.'},
      {t:'60+ مطعماً ومقهى',d:'منطقة مأكولات ضخمة تجمع أشهر المطاعم العالمية والعربية والمصرية في أجواء مميزة.'},
      {t:'محلات الأزياء الفاخرة',d:'أكثر من 100 محل للأزياء والأحذية والإكسسوارات تمثل كبرى العلامات العالمية.'},
      {t:'صيدليات ومراكز صحية',d:'فروع لكبرى سلاسل الصيدليات والمراكز الصحية والعيادات متوفرة داخل المول.'}
    ]},
  pool:{id:'pool',title:'حمام السباحة والنادي المائي',img:'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80',
    fallback:'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1200&q=80',
    short:'حمام سباحة أولمبي ضخم مع نادٍ مائي متكامل مجهز بأعلى المعايير الدولية لتجربة استرخاء لا مثيل لها.',
    long:`يضم العروبة سكوير حمام سباحة أولمبياً بمواصفات دولية عالية يمتد على مساحة 2000 متر مربع، مصمم ليكون الوجهة المثالية لعشاق السباحة والاسترخاء المائي على مدار العام.

يتضمن النادي المائي ثلاثة أحواض منفصلة: الأول للسباحة الحرة بطول 50 متراً ومزود بمسارات دولية، والثاني مخصص للأطفال بعمق آمن ومنطقة ألعاب مائية مميزة، والثالث حوض للسبا والاسترخاء بدرجات حرارة مختلفة لراحتكم.

يعمل الفريق المدرب من المشرفين والمنقذين المعتمدين دولياً على مدار ساعات التشغيل لضمان سلامة جميع المستخدمين، مع توافر خدمة المنشفات والمشروبات وصالات تغيير الملابس المجهزة بالكامل.`,
    feats:[
      {t:'حوض أولمبي 50 متراً',d:'حوض سباحة بمواصفات دولية بطول 50 متراً و8 مسارات منفصلة مع نظام تدوير وتعقيم ذكي.'},
      {t:'حوض أطفال آمن',d:'منطقة مائية مخصصة للأطفال بعمق لا يتجاوز 60 سم مع ألعاب مائية وإشراف متخصص دائم.'},
      {t:'جاكوزي وسبا مائي',d:'حوض سبا مجهز بنظام الفقاعات والتدفق المائي بدرجات حرارة متنوعة لأقصى درجات الاسترخاء.'},
      {t:'طاقم إنقاذ معتمد',d:'فريق من المنقذين المعتمدين دولياً يعملون طوال ساعات التشغيل لضمان سلامة المستخدمين.'},
      {t:'مرافق متكاملة',d:'غرف تغيير ملابس فاخرة، دش ساخن وبارد، خزائن آمنة وخدمة منشفات مجانية لجميع المستخدمين.'},
      {t:'كافيه بحري راقٍ',d:'كافيه بإطلالة مباشرة على الحوض يقدم المشروبات الباردة والوجبات الخفيفة طوال اليوم.'}
    ]},
  gym:{id:'gym',title:'النادي الرياضي واللياقة البدنية',img:'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=600&q=80',
    fallback:'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    short:'نادٍ رياضي عالمي المستوى مجهز بأحدث معدات اللياقة البدنية والقاعات المتخصصة لتحقيق أهدافك الصحية.',
    long:`يُعدّ النادي الرياضي في العروبة سكوير وجهة اللياقة البدنية الأولى في المنطقة، إذ يمتد على مساحة 3500 متر مربع مجهزة بأحدث معدات اللياقة من كبرى العلامات العالمية مثل Technogym وLife Fitness.

يضم النادي أكثر من 300 جهاز رياضي موزعة على أقسام متخصصة: قسم الكارديو بأجهزة الجري والدراجات وعجلات الإيليبتيكال، وقسم الأوزان الحرة المجهز بكامل المعدات المطلوبة، وقسم التدريب الوظيفي بأحدث المعدات المتكاملة.

تتوفر أيضاً 8 قاعات متخصصة لأنواع مختلفة من الرياضات الجماعية كاليوغا والبيلاتس والزومبا وكروسفت والفنون القتالية، مع جدول دروس يومي متنوع يناسب جميع الأعمار والمستويات.`,
    feats:[
      {t:'+300 جهاز رياضي متطور',d:'أحدث معدات اللياقة من Technogym وLife Fitness مقسمة على أقسام الكارديو والأوزان والتدريب الوظيفي.'},
      {t:'8 قاعات رياضية متخصصة',d:'قاعات ليوغا والبيلاتس والزومبا والكروسفت وفنون القتال مع دروس جماعية يومية متنوعة.'},
      {t:'مدربون معتمدون دولياً',d:'فريق من المدربين الشخصيين المعتمدين دولياً لتصميم برامج تدريبية مخصصة تناسب أهدافك.'},
      {t:'تطبيق متابعة ذكي',d:'تطبيق جوال خاص لمتابعة تقدمك الرياضي وحجز الدروس وإدارة جدولك التدريبي بسهولة.'},
      {t:'ساونا وغرف البخار',d:'غرف ساونا جافة وبخارية مزودة بأحدث المعدات للاسترخاء وتحسين الدورة الدموية بعد التمرين.'},
      {t:'متجر التغذية الرياضية',d:'متجر متخصص بالمكملات الغذائية والمشروبات البروتينية والوجبات الصحية بمنتجات معتمدة.'}
    ]},
  maintenance:{id:'maintenance',title:'خدمات الصيانة والإدارة',img:'assets/images/Services-Company.png',
    fallback:'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80',
    short:'فريق صيانة احترافي متكامل يعمل على مدار الساعة لضمان أعلى مستويات الراحة والجودة في حياتك اليومية.',
    long:`تُولي إدارة العروبة سكوير أهمية بالغة لجودة الخدمات المقدمة لساكني المجمع وزوارهم، لذا أسست فريقاً متكاملاً من المهندسين والفنيين المتخصصين الذين يعملون على مدار الساعة طوال أيام الأسبوع.

تشمل خدمات الصيانة جميع جوانب المجمع من كهرباء وسباكة وتكييف وإنترنت وصيانة المصاعد وأنظمة الحماية والإنذار. يستجيب فريق الطوارئ لأي بلاغ خلال 15 دقيقة على الأكثر، مع ضمان إصلاح أي عطل خلال 24 ساعة كحد أقصى في الحالات العادية.

توفر الإدارة أيضاً خدمة التنظيف اليومي لجميع المناطق المشتركة والمداخل والحدائق، مع برنامج منتظم لصيانة المساحات الخضراء والنوافير والعناصر الديكورية للحفاظ على الجمال العام للمجمع.`,
    feats:[
      {t:'استجابة طوارئ 15 دقيقة',d:'فريق طوارئ متخصص يستجيب لجميع البلاغات خلال 15 دقيقة على الأكثر على مدار الساعة.'},
      {t:'صيانة كهرباء وسباكة',d:'فنيون متخصصون في الكهرباء والسباكة وجميع أعمال البنية التحتية والأنظمة الداخلية.'},
      {t:'صيانة التكييف المركزي',d:'برنامج صيانة دورية شاملة لنظام التكييف المركزي مع فريق استجابة سريعة لأي أعطال.'},
      {t:'تنظيف يومي شامل',d:'خدمة تنظيف يومية لجميع المناطق المشتركة والمداخل والمصاعد والممرات بأحدث المعدات والمواد.'},
      {t:'صيانة المساحات الخضراء',d:'فريق متخصص لصيانة الحدائق والنباتات والنوافير والعناصر الديكورية للحفاظ على الجمال العام.'},
      {t:'خدمة عملاء 24/7',d:'مركز خدمة عملاء متاح على مدار الساعة لاستقبال جميع الطلبات والبلاغات وتتبعها حتى الإغلاق.'}
    ]}
};

const SRV_ICONS={
  security:'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  commercial:'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
  mall:'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
  pool:'M3 12h4l3-9 4 18 3-9h4',
  gym:'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
  maintenance:'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z'
};

const BLDS=[
  {id:'building-k',nm:'برج K',de:'برج سكني فاخر يطل على المساحات الخضراء الرئيسية والبحيرات الصناعية.',floors:12,units:[
    {id:'unit-k1',nm:'الوحدة السكنية K 1',ar:'143.00 m² - 170.50 m²',rm:3,bt:2,status:'available',img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',fs:['إطلالة بانورامية كاملة على المسبح الرئيسي','صالة استقبال واسعة بـ 3 قطع منفصلة','غرفة نوم رئيسية ملحق بها حمام وغرفة ملابس','تراس مطل على حدائق اللاندسكيب']},
    {id:'unit-k2',nm:'الوحدة السكنية K 2',ar:'150.00 m² - 165.00 m²',rm:3,bt:2,status:'available',img:'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=80',fs:['موقع ناصية مميز باتجاه بحري شرقي','غرفة غسيل وغرفة خادمة ملحقة','2 تراس واسع بإطلالات مزدوجة']},
    {id:'unit-k3',nm:'الوحدة السكنية K 3',ar:'143.00 m² - 155.00 m²',rm:3,bt:2,status:'reserved',img:'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80',fs:['استغلال مثالي لكافة مساحات الغرف','صالة معيشة مفتوحة ومطبخ أمريكي راقٍ','إطلالة هادئة مريحة على الحزام الأخضر']},
    {id:'unit-k4',nm:'الوحدة السكنية K 4',ar:'160.00 m² - 170.50 m²',rm:4,bt:3,status:'available',img:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80',fs:['مساحة كبيرة تناسب العائلات الكبيرة','غرفة معيشة مستقلة تضمن خصوصية تامة','مطبخ مغلق بمساحة كبيرة وتهوية طبيعية']},
    {id:'unit-k5',nm:'الوحدة السكنية K 5',ar:'145.00 m² - 168.00 m²',rm:3,bt:2,status:'available',img:'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=900&q=80',fs:['إطلالة مزدوجة على المسبح والحديقة','شرفة واسعة تتسع لطاولة جلوس خارجية']},
    {id:'unit-k6',nm:'الوحدة السكنية K 6',ar:'155.00 m² - 170.50 m²',rm:3,bt:2,status:'available',img:'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',fs:['سقف مرتفع وتصميمات داخلية أنيقة','موقع هادئ بعيد عن الضوضاء']}
  ]},
  {id:'building-t',nm:'برج T',de:'برج سكني تجاري متكامل يطل مباشرة على المول التجاري والشارع الرئيسي.',floors:14,units:[
    {id:'unit-t1',nm:'الوحدة السكنية T 1',ar:'135.00 m² - 160.00 m²',rm:3,bt:2,status:'available',img:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',fs:['قريبة جداً من البوابة والمنطقة التجارية','صالة طعام واسعة وتراس خارجي']},
    {id:'unit-t2',nm:'الوحدة السكنية T 2',ar:'145.00 m² - 158.00 m²',rm:3,bt:2,status:'available',img:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80',fs:['إطلالة مميزة على كارفور والمول الجديد']},
    {id:'unit-t3',nm:'الوحدة السكنية T 3',ar:'152.00 m² - 168.00 m²',rm:3,bt:2,status:'reserved',img:'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80',fs:['تشطيب كامل ترا سوبر لوكس جاهز للمعيشة']}
  ]},
  {id:'building-s',nm:'برج S',de:'برج عائلي مخصص للسكن الهادئ محاط بمسارات المشي وألعاب الأطفال.',floors:10,units:[
    {id:'unit-s1',nm:'الوحدة السكنية S 1',ar:'150.00 m² - 175.00 m²',rm:3,bt:2,status:'available',img:'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=900&q=80',fs:['مطلة مباشرة على منطقة ألعاب الأطفال']},
    {id:'unit-s2',nm:'الوحدة السكنية S 2',ar:'162.00 m² - 180.00 m²',rm:4,bt:3,status:'available',img:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80',fs:['٤ غرف نوم مع صالة استقبال ملكية']}
  ]},
  {id:'building-n',nm:'برج N',de:'برج ناصية ذو إطلالة خلابة على الحدائق المركزية والبحيرات.',floors:11,units:[
    {id:'unit-n1',nm:'الوحدة السكنية N 1',ar:'140.00 m² - 165.00 m²',rm:3,bt:2,status:'available',img:'https://images.unsplash.com/photo-1560185127-6a9a1c8d1b21?auto=format&fit=crop&w=900&q=80',fs:['مساحة صالة واسعة جداً وتكييف مركزي']}
  ]},
  {id:'building-h',nm:'برج H',de:'موقع فريد بالقرب من النادي الرياضي والاجتماعي الخاص بالكومباوند.',floors:9,units:[
    {id:'unit-h1',nm:'الوحدة السكنية H 1',ar:'148.00 m² - 170.00 m²',rm:3,bt:2,status:'available',img:'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=80',fs:['تراس واسع بإطلالة جنوبية مريحة']}
  ]},
  {id:'building-u',nm:'برج U',de:'أبراج فاخرة ملحق بها جراجات خاصة بمداخل ومخارج منفصلة.',floors:8,units:[
    {id:'unit-u1',nm:'الوحدة السكنية U 1',ar:'138.00 m² - 160.00 m²',rm:3,bt:2,status:'available',img:'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',fs:['جراج سيارة مؤمن تحت الأرض شامل مع الوحدة']}
  ]},
  {id:'building-z',nm:'برج Z',de:'برج النخبة الحصري بمساحات شاسعة وبنتهاوس بحمام سباحة خاص.',floors:6,units:[
    {id:'unit-z1',nm:'الوحدة السكنية Z 1 (بنتهاوس)',ar:'210.00 m² - 320.00 m²',rm:5,bt:4,status:'available',penthouse:true,img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',fs:['مسبح وتراس خاص بسطح المبنى بالكامل','مصعد مخصص يصل مباشرة داخل البنتهاوس']}
  ]}
];

/* ════════════════════════════════════════════════
   UTILITIES MODULE
   ════════════════════════════════════════════════ */
const Utils = (() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const on = (el, ev, fn, opts) => el.addEventListener(ev, fn, opts);
  const isInViewport = (el, threshold = 0.1) => {
    const r = el.getBoundingClientRect();
    return r.top < (window.innerHeight || document.documentElement.clientHeight) * (1 - threshold) &&
           r.bottom > 0;
  };
  const lerp = (a, b, t) => a + (b - a) * t;
  return { $, $$, on, isInViewport, lerp };
})();

/* ════════════════════════════════════════════════
   IMAGE FALLBACK HANDLER
   ════════════════════════════════════════════════ */
(function setupImageFallbacks() {
  document.querySelectorAll('img[data-fallback]').forEach(img => {
    img.addEventListener('error', function handleError() {
      const fb = this.getAttribute('data-fallback');
      if (fb && this.src !== fb) this.src = fb;
      this.removeEventListener('error', handleError);
    }, { once: true });
  });
})();

/* ════════════════════════════════════════════════
   HEADER — sticky + active section highlight
   ════════════════════════════════════════════════ */
const Header = (() => {
  const hdr = Utils.$('#header');
  const fabTop = Utils.$('#fab-top');
  let stuck = false;

  function update() {
    const y = window.scrollY;
    if (y > 60 && !stuck) { hdr.classList.add('is-sticky'); stuck = true; }
    else if (y <= 60 && stuck) { hdr.classList.remove('is-sticky'); stuck = false; }
    if (fabTop) fabTop.classList.toggle('is-visible', y > 600);
  }
  Utils.on(window, 'scroll', update, { passive: true });
  update();

  if (fabTop) Utils.on(fabTop, 'click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  return { update };
})();

/* ════════════════════════════════════════════════
   REVEAL ON SCROLL
   ════════════════════════════════════════════════ */
const Reveal = (() => {
  const els = Utils.$$('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    els.forEach(e => e.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('is-visible');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
  els.forEach(el => io.observe(el));
})();

/* ════════════════════════════════════════════════
   COUNTER ANIMATION
   ════════════════════════════════════════════════ */
const Counters = (() => {
  const els = Utils.$$('[data-counter]');
  function animate(el) {
    const target = parseInt(el.dataset.counter, 10);
    const suffix = el.dataset.suffix || '';
    const dur = 2000;
    const startTime = performance.now();
    function step(now) {
      const progress = Math.min((now - startTime) / dur, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(target * eased);
      el.textContent = value.toLocaleString('ar-EG') + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString('ar-EG') + suffix;
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { animate(en.target); io.unobserve(en.target); }
      });
    }, { threshold: 0.5 });
    els.forEach(el => io.observe(el));
  } else {
    els.forEach(animate);
  }
})();

/* ════════════════════════════════════════════════
   PROGRESS BARS ANIMATION
   ════════════════════════════════════════════════ */
const ProgressBars = (() => {
  const els = Utils.$$('[data-progress]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          const val = en.target.dataset.progress;
          en.target.style.width = val + '%';
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.5 });
    els.forEach(el => io.observe(el));
  } else {
    els.forEach(el => el.style.width = el.dataset.progress + '%');
  }
})();

/* ════════════════════════════════════════════════
   VIEWS (home/service/units)
   ════════════════════════════════════════════════ */
const Views = (() => {
  let current = 'home';
  function show(view) {
    current = view;
    Utils.$$('.view').forEach(v => v.classList.toggle('is-active', v.dataset.view === view));
    Utils.$$('.nav__item[data-nav]').forEach(b => {
      b.classList.toggle('is-active', b.dataset.nav === view || (view === 'service' && b.dataset.nav === 'services') || (view === 'units' && b.dataset.nav === 'units') || (view === 'home' && b.dataset.nav === 'home'));
    });
    Utils.$$('.drawer__nav-item[data-nav]').forEach(b => {
      b.classList.toggle('is-active', b.dataset.nav === view || (view === 'service' && b.dataset.nav === 'services'));
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function scrl(id) { const el = Utils.$('#' + id); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  function nav(id) {
    closeDrw();
    if (id === 'units') show('units');
    else if (id === 'home') show('home');
    else if (id === 'services') { show('home'); setTimeout(() => scrl('services'), 200); }
    else if (id === 'about') { show('home'); setTimeout(() => scrl('about'), 200); }
    else if (id === 'facilities') { show('home'); setTimeout(() => scrl('facilities'), 200); }
    else if (id === 'contact') { show('home'); setTimeout(() => scrl('contact'), 200); }
    else scrl(id);
  }
  function goContact() {
    closeDrw();
    if (current !== 'home') { show('home'); setTimeout(() => scrl('contact'), 250); }
    else scrl('contact');
  }
  // bind nav buttons
  Utils.$$('.nav__item[data-nav], .drawer__nav-item[data-nav]').forEach(b => Utils.on(b, 'click', () => nav(b.dataset.nav)));
  Utils.$$('.footer__link[data-nav]').forEach(b => Utils.on(b, 'click', () => nav(b.dataset.nav)));
  Utils.$$('.sd-breadcrumb button').forEach(b => Utils.on(b, 'click', () => nav(b.dataset.nav)));
  Utils.$$('[data-action="services"]').forEach(b => Utils.on(b, 'click', () => nav('services')));
  Utils.$$('[data-action="contact"]').forEach(b => Utils.on(b, 'click', goContact));
  Utils.$$('[data-action="brochure"]').forEach(b => Utils.on(b, 'click', () => { show('home'); setTimeout(() => scrl('brochure'), 200); }));
  Utils.on(Utils.$('#go-home'), 'click', () => nav('home'));
  Utils.on(Utils.$('#hdr-inq'), 'click', goContact);
  Utils.on(Utils.$('#drw-inq'), 'click', goContact);
  Utils.$$('.iq').forEach(b => Utils.on(b, 'click', goContact));

  return { show, nav, scrl, goContact, get current() { return current; } };
})();

/* ════════════════════════════════════════════════
   MOBILE DRAWER
   ════════════════════════════════════════════════ */
const Drawer = (() => {
  const overlay = Utils.$('#drawer-overlay');
  function open() { overlay.classList.add('is-open'); document.body.classList.add('no-scroll'); }
  function close() { overlay.classList.remove('is-open'); document.body.classList.remove('no-scroll'); }
  Utils.on(Utils.$('#hambtn'), 'click', open);
  Utils.on(Utils.$('#drw-cls'), 'click', close);
  Utils.on(overlay, 'click', (e) => { if (e.target === overlay) close(); });
  Utils.on(document, 'keydown', (e) => { if (e.key === 'Escape') close(); });
  window.closeDrw = close;
  return { open, close };
})();

/* ════════════════════════════════════════════════
   SERVICES GRID
   ════════════════════════════════════════════════ */
const ServicesGrid = (() => {
  const grid = Utils.$('#services-grid');
  if (!grid) return;
  grid.innerHTML = Object.values(SRV).map(s => `
    <article class="svc-card" data-service="${s.id}" data-reveal>
      <div class="svc-card__image">
        <img src="${s.img}" alt="${s.title}" data-fallback="${s.fallback}" loading="lazy"/>
        <div class="svc-card__image-overlay"></div>
        <div class="svc-card__icon">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="${SRV_ICONS[s.id] || SRV_ICONS.security}"/></svg>
        </div>
      </div>
      <div class="svc-card__body">
        <h3 class="svc-card__title">${s.title}</h3>
        <p class="svc-card__desc">${s.short}</p>
        <div class="svc-card__more">
          <span>قراءة المزيد</span>
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
        </div>
      </div>
    </article>
  `).join('');
  // Observe newly injected cards
  const svcCards = Utils.$$('.svc-card[data-reveal]', grid);
  if ('IntersectionObserver' in window) {
    const svcIo = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-visible'); svcIo.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
    svcCards.forEach(el => svcIo.observe(el));
  } else { svcCards.forEach(el => el.classList.add('is-visible')); }
  // Image fallbacks
  grid.querySelectorAll('img[data-fallback]').forEach(img => {
    img.addEventListener('error', function() { const fb=this.getAttribute('data-fallback'); if(fb&&this.src!==fb)this.src=fb; }, {once:true});
  });
  Utils.$$('.svc-card').forEach(c => Utils.on(c, 'click', () => openSrv(c.dataset.service)));
})();

/* ════════════════════════════════════════════════
   SERVICE DETAIL
   ════════════════════════════════════════════════ */
function openSrv(key) {
  const s = SRV[key]; if (!s) return;
  Utils.$('#sd-img').src = s.img;
  Utils.$('#sd-img').alt = s.title;
  Utils.$('#sd-img').setAttribute('data-fallback', s.fallback);
  Utils.$('#sd-bc').textContent = s.title;
  Utils.$('#sd-title').textContent = s.title;
  Utils.$('#sd-short').textContent = s.short;
  Utils.$('#sd-long').textContent = s.long;
  Utils.$('#sd-feats').innerHTML = s.feats.map(f => `
    <div class="sd-feature is-visible">
      <div class="sd-feature__icon"><svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg></div>
      <div><div class="sd-feature__title">${f.t}</div><div class="sd-feature__desc">${f.d}</div></div>
    </div>`).join('');
  Utils.$('#sd-others').innerHTML = Object.values(SRV).filter(x => x.id !== key).map(x => `
    <button class="sd-other-item" type="button" data-srv="${x.id}">
      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
      <span>${x.title}</span>
    </button>`).join('');
  Utils.$$('#sd-others [data-srv]').forEach(b => Utils.on(b, 'click', () => openSrv(b.dataset.srv)));
  Utils.$$('#vs .iq').forEach(b => Utils.on(b, 'click', Views.goContact));
  Views.show('service');
}

/* ════════════════════════════════════════════════
   FACILITIES SLIDER
   ════════════════════════════════════════════════ */
const FacilitiesSlider = (() => {
  const el = Utils.$('#facsl');
  function scrollDir(d) { el.scrollBy({ left: 320 * (d === 'r' ? -1 : 1), behavior: 'smooth' }); }
  Utils.on(Utils.$('#sl-r'), 'click', () => scrollDir('r'));
  Utils.on(Utils.$('#sl-l'), 'click', () => scrollDir('l'));
  Utils.on(Utils.$('#sl-rm'), 'click', () => scrollDir('r'));
  Utils.on(Utils.$('#sl-lm'), 'click', () => scrollDir('l'));
})();

/* ════════════════════════════════════════════════
   UNITS VIEW
   ════════════════════════════════════════════════ */
const UnitsView = (() => {
  let selectedBld = 'building-k';
  let expandedUnit = null;

  function renderBtns() {
    Utils.$('#bbtns').innerHTML = BLDS.map(b => `
      <button class="bbtn${b.id === selectedBld ? ' is-active' : ''}" data-b="${b.id}" type="button">
        <span>${b.nm}</span>
        <span class="bbtn__count">${b.units.length}</span>
      </button>`).join('');
    Utils.$$('#bbtns .bbtn').forEach(btn => Utils.on(btn, 'click', () => {
      selectedBld = btn.dataset.b;
      const b = BLDS.find(x => x.id === selectedBld);
      expandedUnit = b?.units[0]?.id || null;
      renderBtns(); renderProfile(); renderAcc();
    }));
  }

  function renderProfile() {
    const b = BLDS.find(x => x.id === selectedBld); if (!b) return;
    Utils.$('#bp-nm').textContent = b.nm;
    Utils.$('#bp-de').textContent = b.de;
    Utils.$('#bp-units').textContent = b.units.length;
    Utils.$('#bp-floors').textContent = b.floors;
  }

  function renderAcc() {
    const b = BLDS.find(x => x.id === selectedBld); if (!b) return;
    Utils.$('#uacc').innerHTML = b.units.map(u => {
      const open = expandedUnit === u.id;
      return `<div class="unit-card${open ? ' is-open' : ''}" data-uid="${u.id}">
        <button class="unit-card__head" type="button" data-t="${u.id}">
          <svg class="unit-card__chev" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          <div class="unit-card__head-r">
            <span class="unit-card__area">${u.ar}</span>
            <h3 class="unit-card__name">${u.nm}</h3>
          </div>
        </button>
        <div class="unit-card__body">
          <div class="unit-card__body-inner">
            <div class="unit-card__unit-img">
              <img src="${u.img || 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80'}" alt="${u.nm}" loading="lazy" />
            </div>
            <div class="unit-card__detail-grid">
              <div>
                <div class="unit-card__section-title">تفاصيل المساحات والتقسيم الداخلي</div>
                <div class="unit-card__specs">
                  <div class="unit-card__spec"><span class="unit-card__spec-label">المساحة</span><span class="unit-card__spec-value" style="font-family:sans-serif;font-size:12px">${u.ar.split(' - ')[0]}</span></div>
                  <div class="unit-card__spec"><span class="unit-card__spec-label">غرف النوم</span><span class="unit-card__spec-value">${u.rm} غرف</span></div>
                  <div class="unit-card__spec"><span class="unit-card__spec-label">الحمامات</span><span class="unit-card__spec-value">${u.bt} حمامات</span></div>
                </div>
                <p class="unit-card__desc">تم تزويد كافة الوحدات بمنافذ للتكييف المركزي وتجهيزات الكهرباء الذكية، بجانب خطوط إنترنت فايبر عالي السرعة وإطلالات مباشرة على بحيرة الكومباوند ومساحات اللاندسكيب لضمان هدوء تام طوال الوقت.</p>
              </div>
              <div>
                <div class="unit-card__section-title">مواصفات ومميزات الوحدة الحصرية</div>
                <ul class="unit-card__features">${u.fs.map(f => `<li class="unit-card__feature"><span>${f}</span><span class="unit-card__feature-icon"><svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg></span></li>`).join('')}</ul>
              </div>
            </div>
            <div class="unit-card__actions">
              <button class="btn btn--primary btn--sm bdl" type="button" data-un="${u.nm}">
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                <span>تحميل المخطط المعماري الكامل</span>
              </button>
              <button class="btn btn--outline btn--sm iq" type="button">
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                طلب كراسة شروط ومعاينة
              </button>
            </div>
          </div>
        </div>
      </div>`;
    }).join('');

    Utils.$$('#uacc [data-t]').forEach(btn => Utils.on(btn, 'click', () => {
      const uid = btn.dataset.t;
      expandedUnit = expandedUnit === uid ? null : uid;
      renderAcc();
    }));
    Utils.$$('#uacc .bdl').forEach(btn => Utils.on(btn, 'click', () => {
      const n = btn.dataset.un;
      btn.disabled = true;
      btn.classList.add('btn--outline');
      btn.querySelector('span').textContent = 'جاري التحميل...';
      setTimeout(() => {
        btn.disabled = false;
        btn.classList.remove('btn--outline');
        btn.querySelector('span').textContent = 'تحميل المخطط المعماري الكامل';
        alert('تم بدء تحميل ملف المخطط الهندسي لـ: ' + n + ' بنجاح.');
      }, 1200);
    }));
    Utils.$$('#uacc .iq').forEach(b => Utils.on(b, 'click', Views.goContact));
  }

  return {
    render: function() { renderBtns(); renderProfile(); renderAcc(); expandedUnit = 'unit-k1'; },
    selectBuilding: function(id) {
      const b = BLDS.find(x => x.id === id); if (!b) return;
      selectedBld = id;
      expandedUnit = b.units[0] ? b.units[0].id : null;
      renderBtns(); renderProfile(); renderAcc();
    }
  };
})();

/* ════════════════════════════════════════════════
   AVAILABLE UNITS CATALOG
   ════════════════════════════════════════════════ */
const UnitsCatalog = (() => {
  const grid = Utils.$('#catalog-grid');
  const filtersEl = Utils.$('#catalog-filters');
  let activeFilter = 'all';

  function allUnits() {
    const list = [];
    BLDS.forEach(b => {
      b.units.forEach(u => {
        list.push({
          ...u,
          building: b.nm,
          price: u.penthouse ? 8500000 : (u.rm === 4 ? 4200000 : 3200000),
          image: u.penthouse ? 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80' :
                 (u.rm === 4 ? 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80' :
                 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80')
        });
      });
    });
    return list;
  }

  function filtered() {
    const all = allUnits();
    if (activeFilter === 'all') return all;
    if (activeFilter === 'available') return all.filter(u => u.status === 'available');
    if (activeFilter === 'penthouse') return all.filter(u => u.penthouse);
    return all.filter(u => String(u.rm) === activeFilter);
  }

  function render() {
    const list = filtered();
    if (list.length === 0) {
      grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;padding:40px;color:var(--c-text-3)">لا توجد وحدات مطابقة لهذا الفلتر حالياً.</p>';
      return;
    }
    grid.innerHTML = list.map(u => {
      const statusLabel = u.status === 'available' ? 'متاح' : 'محجوز';
      const statusClass = u.status === 'available' ? 'ucard__badge--avail' : 'ucard__badge--reserved';
      const formattedPrice = (u.price / 1000000).toFixed(2).replace('.', ',');
      return `<article class="ucard" data-reveal>
        <div class="ucard__image">
          <img src="${u.image}" alt="${u.nm}" loading="lazy"/>
          <span class="ucard__badge ${statusClass}">${statusLabel}</span>
          <button class="ucard__wishlist" type="button" aria-label="إضافة للمفضلة"><svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg></button>
        </div>
        <div class="ucard__body">
          <h3 class="ucard__title">${u.nm}</h3>
          <div class="ucard__location"><svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>${u.building} - العروبة سكوير</div>
          <div class="ucard__specs">
            <div class="ucard__spec"><span class="ucard__spec-label">المساحة</span><span class="ucard__spec-value" style="font-family:sans-serif;font-size:11px">${u.ar.split(' - ')[0]}</span></div>
            <div class="ucard__spec"><span class="ucard__spec-label">غرف</span><span class="ucard__spec-value">${u.rm}</span></div>
            <div class="ucard__spec"><span class="ucard__spec-label">حمامات</span><span class="ucard__spec-value">${u.bt}</span></div>
          </div>
          <div class="ucard__price"><span class="ucard__price-num">${formattedPrice}</span><span class="ucard__price-period">مليون ج.م</span></div>
          <div class="ucard__actions">
            <button class="btn btn--outline btn--sm" type="button" data-units="${u.id}" data-building="${u.building}">التفاصيل</button>
            <button class="btn btn--primary btn--sm iq" type="button">استفسار</button>
          </div>
        </div>
      </article>`;
    }).join('');
    Utils.$$('.ucard__wishlist').forEach(b => Utils.on(b, 'click', (e) => { e.stopPropagation(); b.classList.toggle('is-active'); }));
    Utils.$$('.ucard [data-units]').forEach(b => Utils.on(b, 'click', () => {
      const uid = b.dataset.units;
      const bldName = b.dataset.building;
      const building = BLDS.find(x => x.nm === bldName);
      if (building) {
        Views.show('units');
        // Optionally select building - simplified for now
      }
    }));
    Utils.$$('.ucard .iq').forEach(b => Utils.on(b, 'click', Views.goContact));
    // Re-observe new reveal elements
    Utils.$$('.ucard[data-reveal]').forEach(el => {
      el.classList.remove('is-visible');
      if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach(en => {
            if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
          });
        }, { threshold: 0.12 });
        io.observe(el);
      } else {
        el.classList.add('is-visible');
      }
    });
  }

  Utils.$$('.units-catalog__filter').forEach(btn => Utils.on(btn, 'click', () => {
    Utils.$$('.units-catalog__filter').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    activeFilter = btn.dataset.filter;
    render();
  }));

  return { render };
})();


/* ════════════════════════════════════════════════
   FAQ
   ════════════════════════════════════════════════ */
const Faq = (() => {
  Utils.$$('.faq__question').forEach(btn => Utils.on(btn, 'click', () => {
    const item = btn.closest('.faq__item');
    const wasOpen = item.classList.contains('is-open');
    Utils.$$('.faq__item').forEach(i => i.classList.remove('is-open'));
    if (!wasOpen) item.classList.add('is-open');
  }));
  const search = Utils.$('#faq-search');
  if (search) {
    Utils.on(search, 'input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      Utils.$$('.faq__item').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = (q === '' || text.includes(q)) ? '' : 'none';
      });
    });
  }
})();

/* ════════════════════════════════════════════════
   VIDEO MODAL
   ════════════════════════════════════════════════ */
const VideoModal = (() => {
  const modal = Utils.$('#video-modal');
  const iframe = Utils.$('#vif');
  function open(url) { iframe.src = url + '?autoplay=1'; modal.classList.add('is-open'); document.body.classList.add('no-scroll'); }
  function close() { modal.classList.remove('is-open'); iframe.src = ''; document.body.classList.remove('no-scroll'); }
  Utils.on(Utils.$('#h-vid-btn'), 'click', () => open('assets/images/Al Orouba Square.mp4'));
  Utils.on(Utils.$('#play-video-2'), 'click', () => open('assets/images/Al Orouba Square.mp4'));
  Utils.on(Utils.$('#vcls'), 'click', close);
  Utils.on(modal, 'click', (e) => { if (e.target === modal) close(); });
  Utils.on(document, 'keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('is-open')) close(); });
})();

/* ════════════════════════════════════════════════
   LIGHTBOX
   ════════════════════════════════════════════════ */
const Lightbox = (() => {
  const lb = Utils.$('#lightbox');
  const img = Utils.$('.lightbox__img');
  function open(src) { img.src = src; lb.classList.add('is-open'); document.body.classList.add('no-scroll'); }
  function close() { lb.classList.remove('is-open'); img.src = ''; document.body.classList.remove('no-scroll'); }
  Utils.on(Utils.$('.lightbox__close'), 'click', close);
  Utils.on(lb, 'click', (e) => { if (e.target !== img) close(); });
  // Optional: open on lifestyle image click
  Utils.$$('.lifestyle-item img').forEach(i => Utils.on(i, 'click', () => open(i.src)));
  Utils.$$('.project-card__image img').forEach(i => Utils.on(i, 'click', () => open(i.src)));
  Utils.$$('.project-card__view').forEach(btn => {
    Utils.on(btn, 'click', (e) => { e.stopPropagation(); const img = btn.closest('.project-card').querySelector('img'); if(img) open(img.src); });
  });
})();

/* ════════════════════════════════════════════════
   CONTACT FORM
   ════════════════════════════════════════════════ */
const ContactForm = (() => {
  const fn = Utils.$('#fn'), fp = Utils.$('#fp'), fe = Utils.$('#fe'), fm = Utils.$('#fm');
  const sbtn = Utils.$('#sbtn'), slbl = Utils.$('#slbl');
  const fsuc = Utils.$('#fsuc'), ff = Utils.$('#ffields');
  if (!fn) return;
  function showErr(id, msg) {
    const el = Utils.$('#' + id); if (!el) return;
    el.classList.add('is-visible');
    if (msg) { const s = el.querySelector('span'); if (s) s.textContent = msg; }
    ({'fe-n': fn, 'fe-p': fp, 'fe-e': fe})[id]?.classList.add('has-error');
  }
  function hideErr(id) {
    const el = Utils.$('#' + id); if (el) el.classList.remove('is-visible');
    ({'fe-n': fn, 'fe-p': fp, 'fe-e': fe})[id]?.classList.remove('has-error');
  }
  Utils.on(fn, 'input', () => hideErr('fe-n'));
  Utils.on(fp, 'input', () => hideErr('fe-p'));
  Utils.on(fe, 'input', () => hideErr('fe-e'));
  function validate() {
    let ok = true;
    hideErr('fe-n'); hideErr('fe-p'); hideErr('fe-e');
    if (!fn.value.trim()) { showErr('fe-n', 'حقل الاسم مطلوب'); ok = false; }
    if (!fp.value.trim()) { showErr('fe-p', 'رقم الهاتف مطلوب للاتصال بك'); ok = false; }
    else if (!/^\+?[\d\s\-]{8,15}$/.test(fp.value.trim())) { showErr('fe-p', 'يرجى إدخال رقم هاتف صحيح'); ok = false; }
    if (fe.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fe.value.trim())) { showErr('fe-e'); ok = false; }
    return ok;
  }
  Utils.on(sbtn, 'click', () => {
    if (!validate()) return;
    sbtn.disabled = true;
    sbtn.innerHTML = '<div class="btn-submit__spinner"></div><span>جاري إرسال طلبك...</span>';
    setTimeout(() => {
      fn.value = ''; fp.value = ''; fe.value = ''; fm.value = '';
      ff.style.display = 'none';
      fsuc.classList.add('is-visible');
      sbtn.disabled = false;
      sbtn.innerHTML = '<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="transform:rotate(180deg)"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg><span>تأكيد التسجيل وتواصل المبيعات</span>';
      setTimeout(() => { fsuc.classList.remove('is-visible'); ff.style.display = 'block'; }, 6000);
    }, 2000);
  });
  Utils.on(Utils.$('#bagn'), 'click', () => { fsuc.classList.remove('is-visible'); ff.style.display = 'block'; });
})();

/* ════════════════════════════════════════════════
   NEWSLETTER FORM
   ════════════════════════════════════════════════ */
const Newsletter = (() => {
  const form = Utils.$('#newsletter-form');
  if (!form) return;
  Utils.on(form, 'submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input');
    if (input.value.trim()) {
      input.value = '';
      const btn = form.querySelector('button');
      btn.innerHTML = '<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>';
      setTimeout(() => { btn.innerHTML = '<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>'; }, 3000);
    }
  });
})();

/* ════════════════════════════════════════════════
   RIPPLE EFFECT ON BUTTONS
   ════════════════════════════════════════════════ */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn:not(.no-ripple)');
  if (!btn) return;
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
  ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});

/* ════════════════════════════════════════════════
   INIT
   ════════════════════════════════════════════════ */
UnitsView.render();
UnitsCatalog.render();

/* ════════════════════════════════════════════════
   TESTIMONIALS SLIDER
   ════════════════════════════════════════════════ */
(function() {
  const track = document.getElementById('testi-track');
  const dotsWrap = document.getElementById('testi-dots');
  const prevBtn = document.getElementById('testi-prev');
  const nextBtn = document.getElementById('testi-next');
  if (!track) return;

  const cards = track.querySelectorAll('.testimonial-card');
  let current = 0;
  let perView = 3;

  function getPerView() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  }

  function totalPages() { return Math.ceil(cards.length / perView); }

  function buildDots() {
    dotsWrap.innerHTML = '';
    const n = totalPages();
    for (let i = 0; i < n; i++) {
      const d = document.createElement('button');
      d.className = 'testimonials__dot' + (i === current ? ' is-active' : '');
      d.setAttribute('aria-label', 'صفحة ' + (i+1));
      d.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(d);
    }
  }

  function goTo(idx) {
    const n = totalPages();
    current = (idx + n) % n;
    const gap = 24;
    const cardW = cards[0].offsetWidth + gap;
    track.style.transform = 'translateX(' + (current * perView * cardW) + 'px)';
    buildDots();
  }

  function init() {
    perView = getPerView();
    current = 0;
    track.style.transform = 'translateX(0)';
    buildDots();
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));
  window.addEventListener('resize', init);
  init();
  setInterval(() => goTo(current + 1), 5000);
})();

/* ════════════════════════════════════════════════
   NEWS DATA & MODAL
   ════════════════════════════════════════════════ */
const NEWS_DATA = [
  {id:'n1',title:'افتتاح المرحلة الجديدة من العروبة سكوير',cat:'إعلان',date:'١٥ يونيو ٢٠٢٦',img:'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',content:`<p>يسعدنا الإعلان عن الإطلاق الرسمي للمرحلة الجديدة من مشروع العروبة سكوير استجابةً للطلب المتزايد من عملائنا الكرام.</p><p>تتميز هذه المرحلة بمساحات تبدأ من ١٦٥ م² للوحدات القياسية وصولاً إلى ٤٢٠ م² للبنتهاوسات، مع تشطيب سوبر لوكس بأحدث مواد البناء الإيطالية.</p><p>خطط السداد: مقدم ٥٪ مع تقسيط ٨ سنوات بدون فوائد، وخصم ١٠٪ للسداد الكاش. للحجز: ١٦٤١٤.</p>`},
  {id:'n2',title:'افتتاح المسبح الأولمبي والنادي المائي',cat:'فعاليات',date:'٢٨ مايو ٢٠٢٦',img:'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80',content:`<p>احتفل المشروع بافتتاح النادي المائي المتكامل الأضخم في كمباوندات القاهرة الجديدة.</p><p>يضم حوضاً أولمبياً ٥٠م بـ٨ مسارات دولية، وحوضاً للأطفال بألعاب مائية، وجاكوزي وسبا، وكافيه بحري راقٍ.</p><p>المسبح متاح لساكني المشروع من ٧ صباحاً حتى ١٠ مساءً يومياً.</p>`},
  {id:'n3',title:'حصولنا على جائزة أفضل مشروع سكني',cat:'جوائز',date:'١٠ مايو ٢٠٢٦',img:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',content:`<p>تشرفنا بتسلّم جائزة أفضل مشروع سكني متكامل لعام ٢٠٢٦ من المؤسسة العقارية العربية.</p><p>التقييم غطى: جودة التشطيب، تنوع المرافق، الالتزام بالتسليم، ورضا العملاء الذي بلغ ٩٤٪.</p><p>هذه الجائزة تُضاف لأكثر من ١٥ جائزة محلية وإقليمية في السنوات الخمس الأخيرة.</p>`},
  {id:'n4',title:'اتفاقية شراكة استراتيجية مع كارفور',cat:'أعمال',date:'٥ يونيو ٢٠٢٦',img:'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',content:`<p>وقّعنا اتفاقية شراكة حصرية مع مجموعة ماجد الفطيم مشغّل كارفور في مصر.</p><p>الفرع على مساحة ٨٠٠٠ م² بطابقين، يوفر ٥٠ ألف منتج، يُفتتح الربع الأول ٢٠٢٧ مع ٤٥٠ فرصة عمل.</p>`},
  {id:'n5',title:'بدء تسليم وحدات برج K في موعدها',cat:'تسليمات',date:'٢٠ أبريل ٢٠٢٦',img:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',content:`<p>انطلقت عمليات تسليم برج K في موعدها تماماً وسط احتفالات مع العملاء.</p><p>التشطيب يشمل: بورسلان إسباني ٩٠×٩٠، دهانات إيطالية، أدوات صحية GROHE، تكييف مركزي، مطبخ مجهز، وإنارة ذكية.</p>`},
  {id:'n6',title:'مشاركتنا في معرض سيتي سكيب القاهرة ٢٠٢٦',cat:'معارض',date:'١ مارس ٢٠٢٦',img:'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800&q=80',content:`<p>شاركنا بجناح ٦٠٠م² في معرض سيتي سكيب ٢٠٢٦ بنماذج ثلاثية الأبعاد وجولات VR.</p><p>خلال ٤ أيام: ٣٢٠٠+ زائر، حجز ٤٢ وحدة، عقود بقيمة ٣٢٠ مليون جنيه.</p>`}
];

(function initNewsModal() {
  var modal = document.getElementById('news-modal');
  if (!modal) return;
  var nmImg = document.getElementById('nm-img');
  var nmCat = document.getElementById('nm-cat');
  var nmDate = document.getElementById('nm-date');
  var nmTitle = document.getElementById('nm-title');
  var nmBody = document.getElementById('nm-body');

  function openNews(id) {
    var n = NEWS_DATA.filter(function(x){return x.id===id;})[0];
    if (!n) return;
    nmImg.src = n.img; nmImg.alt = n.title;
    nmCat.textContent = n.cat;
    nmDate.textContent = n.date;
    nmTitle.textContent = n.title;
    nmBody.innerHTML = n.content;
    modal.classList.add('is-open');
    document.body.classList.add('no-scroll');
    modal.querySelector('.news-modal__panel').scrollTop = 0;
  }
  function closeNews() {
    modal.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  }
  document.getElementById('nm-close').addEventListener('click', closeNews);
  document.getElementById('nm-backdrop').addEventListener('click', closeNews);
  document.getElementById('nm-close2').addEventListener('click', closeNews);
  var cta = document.getElementById('nm-cta');
  if (cta) cta.addEventListener('click', function(){ closeNews(); });
  document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeNews(); });

  var moreLinks = document.querySelectorAll('.news-card__more');
  for (var i=0; i<moreLinks.length; i++) {
    (function(idx){
      moreLinks[idx].addEventListener('click', function(e){
        e.preventDefault();
        openNews(NEWS_DATA[idx] ? NEWS_DATA[idx].id : 'n1');
      });
    })(i);
  }
})();


/* ════════════════════════════════════════════════
   MASTER PLAN — interactive zoom/pan map + tower modal
   ════════════════════════════════════════════════ */
const TOWERS = [
  { id:'building-k', number:'A-01', status:'done',     statusLabel:'مكتمل',         completion:100, sold:92, floors:12, units:96,  elevators:4, delivery:'2024', areas:'143 - 320 م²', types:'3-5 غرف، بنتهاوس', remaining:8,  priceFrom:'4,200,000 جنيه' },
  { id:'building-t', number:'A-02', status:'done',     statusLabel:'مكتمل',         completion:100, sold:88, floors:14, units:112, elevators:5, delivery:'2024', areas:'135 - 168 م²', types:'3 غرف',            remaining:14, priceFrom:'3,950,000 جنيه' },
  { id:'building-s', number:'B-01', status:'progress', statusLabel:'قيد الإنشاء',   completion:72,  sold:58, floors:10, units:80,  elevators:3, delivery:'2025', areas:'150 - 180 م²', types:'3-4 غرف',          remaining:34, priceFrom:'3,600,000 جنيه' },
  { id:'building-n', number:'B-02', status:'progress', statusLabel:'قيد الإنشاء',   completion:55,  sold:41, floors:11, units:88,  elevators:3, delivery:'2025', areas:'140 - 165 م²', types:'3 غرف',            remaining:52, priceFrom:'3,750,000 جنيه' },
  { id:'building-h', number:'B-03', status:'progress', statusLabel:'قيد الإنشاء',   completion:38,  sold:24, floors:9,  units:72,  elevators:2, delivery:'2026', areas:'148 - 170 م²', types:'3 غرف',            remaining:55, priceFrom:'3,500,000 جنيه' },
  { id:'building-u', number:'C-01', status:'soon',     statusLabel:'قريباً',        completion:10,  sold:0,  floors:8,  units:64,  elevators:2, delivery:'2026', areas:'138 - 160 م²', types:'3 غرف',            remaining:64, priceFrom:'3,300,000 جنيه' },
  { id:'building-z', number:'C-02', status:'soon',     statusLabel:'قريباً',        completion:5,   sold:0,  floors:6,  units:36,  elevators:2, delivery:'2027', areas:'210 - 320 م²', types:'بنتهاوس فاخر',     remaining:36, priceFrom:'6,800,000 جنيه' }
];

const MasterPlan = (() => {
  const frame = Utils.$('#mp-frame');
  if (!frame) return;
  const stage = Utils.$('#mp-stage');
  const hotspots = Utils.$$('#mp-hotspots .hotspot');
  const hint = Utils.$('#mp-hint');

  let scale = 1, x = 0, y = 0;
  const MIN = 1, MAX = 3.2;
  let dragging = false, dragStartX = 0, dragStartY = 0, originX = 0, originY = 0;
  let pinchStartDist = 0, pinchStartScale = 1;

  function apply(animated) {
    stage.style.transition = animated ? '' : 'none';
    stage.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
  }

  function clamp() {
    const max = (scale - 1) * (frame.clientWidth / 2) + 1;
    const maxY = (scale - 1) * (frame.clientHeight / 2) + 1;
    x = Math.max(-max, Math.min(max, x));
    y = Math.max(-maxY, Math.min(maxY, y));
  }

  function zoomBy(delta, animated) {
    scale = Math.max(MIN, Math.min(MAX, scale + delta));
    if (scale === MIN) { x = 0; y = 0; }
    clamp();
    apply(animated !== false);
  }

  function reset() { scale = 1; x = 0; y = 0; apply(true); }

  function focusPoint(rightPct, topPct, targetScale) {
    scale = targetScale;
    const fw = frame.clientWidth, fh = frame.clientHeight;
    const px = fw * (1 - rightPct / 100);
    const py = fh * (topPct / 100);
    x = (fw / 2 - px) * scale / 1;
    y = (fh / 2 - py) * scale / 1;
    clamp();
    apply(true);
  }

  // Toolbar controls
  Utils.on(Utils.$('#mp-zoom-in'), 'click', () => zoomBy(0.5));
  Utils.on(Utils.$('#mp-zoom-out'), 'click', () => zoomBy(-0.5));
  Utils.on(Utils.$('#mp-reset'), 'click', reset);

  // Wheel zoom
  Utils.on(frame, 'wheel', (e) => {
    e.preventDefault();
    zoomBy(e.deltaY < 0 ? 0.25 : -0.25, false);
  }, { passive: false });

  // Mouse drag pan
  Utils.on(frame, 'mousedown', (e) => {
    if (scale <= 1) return;
    dragging = true; frame.classList.add('is-dragging');
    dragStartX = e.clientX; dragStartY = e.clientY; originX = x; originY = y;
  });
  Utils.on(window, 'mousemove', (e) => {
    if (!dragging) return;
    x = originX + (e.clientX - dragStartX);
    y = originY + (e.clientY - dragStartY);
    clamp(); apply(false);
  });
  Utils.on(window, 'mouseup', () => { dragging = false; frame.classList.remove('is-dragging'); });

  // Touch pan + pinch zoom
  Utils.on(frame, 'touchstart', (e) => {
    if (hint) hint.style.opacity = '0';
    if (e.touches.length === 1 && scale > 1) {
      dragging = true;
      dragStartX = e.touches[0].clientX; dragStartY = e.touches[0].clientY;
      originX = x; originY = y;
    } else if (e.touches.length === 2) {
      dragging = false;
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      pinchStartDist = Math.hypot(dx, dy);
      pinchStartScale = scale;
    }
  }, { passive: true });
  Utils.on(frame, 'touchmove', (e) => {
    if (e.touches.length === 1 && dragging) {
      x = originX + (e.touches[0].clientX - dragStartX);
      y = originY + (e.touches[0].clientY - dragStartY);
      clamp(); apply(false);
    } else if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      scale = Math.max(MIN, Math.min(MAX, pinchStartScale * (dist / pinchStartDist)));
      if (scale === MIN) { x = 0; y = 0; }
      clamp(); apply(false);
    }
  }, { passive: true });
  Utils.on(frame, 'touchend', () => { dragging = false; });

  // Status-tint the hotspots from TOWERS data (single source of truth)
  hotspots.forEach(h => {
    const t = TOWERS.find(tw => tw.id === h.dataset.tower);
    if (t) h.classList.add('hotspot--' + t.status);
  });

  return { zoomBy, reset, focusPoint, hotspots };
})();

const TowerModal = (() => {
  const modal = Utils.$('#tower-modal');
  if (!modal) return;
  const els = {
    status: Utils.$('#tm-status'), number: Utils.$('#tm-number'), name: Utils.$('#tm-name'),
    desc: Utils.$('#tm-desc'), stats: Utils.$('#tm-stats'),
    completionVal: Utils.$('#tm-completion-val'), completionBar: Utils.$('#tm-completion-bar'),
    soldVal: Utils.$('#tm-sold-val'), soldBar: Utils.$('#tm-sold-bar'),
    view: Utils.$('#tm-view'), brochure: Utils.$('#tm-brochure'), visit: Utils.$('#tm-visit'), contact: Utils.$('#tm-contact')
  };
  let activeTower = null, activeHotspot = null;

  function statClass(status) { return status === 'done' ? 'tower-modal__status--done' : status === 'progress' ? 'tower-modal__status--progress' : 'tower-modal__status--soon'; }

  function open(towerId, triggerEl) {
    const t = TOWERS.find(x => x.id === towerId); if (!t) return;
    const b = (typeof BLDS !== 'undefined') ? BLDS.find(x => x.id === towerId) : null;
    activeTower = t; activeHotspot = triggerEl;

    if (activeHotspot) {
      Utils.$$('#mp-hotspots .hotspot').forEach(h => h.classList.remove('is-active'));
      activeHotspot.classList.add('is-active');
      activeHotspot.setAttribute('aria-expanded', 'true');
      if (MasterPlan) {
        const right = parseFloat(activeHotspot.style.right);
        const top = parseFloat(activeHotspot.style.top);
        MasterPlan.focusPoint(right, top, 1.8);
      }
    }

    els.status.textContent = t.statusLabel;
    els.status.className = 'tower-modal__status ' + statClass(t.status);
    els.number.textContent = t.number;
    els.name.textContent = b ? b.nm : t.id;
    els.desc.textContent = b ? b.de : '';

    const stats = [
      { l: 'عدد الأدوار', v: t.floors }, { l: 'عدد الوحدات', v: t.units },
      { l: 'عدد المصاعد', v: t.elevators }, { l: 'سنة التسليم', v: t.delivery },
      { l: 'المساحات المتوفرة', v: t.areas }, { l: 'أنواع الوحدات', v: t.types },
      { l: 'الوحدات المتبقية', v: t.remaining }, { l: 'السعر يبدأ من', v: t.priceFrom }
    ];
    els.stats.innerHTML = stats.map(s => `<div class="tm-stat"><span class="tm-stat__label">${s.l}</span><span class="tm-stat__value">${s.v}</span></div>`).join('');

    els.completionVal.textContent = t.completion + '%';
    els.soldVal.textContent = t.sold + '%';
    els.completionBar.style.width = '0%';
    els.soldBar.style.width = '0%';

    modal.classList.add('is-open');
    document.body.classList.add('no-scroll');
    requestAnimationFrame(() => {
      els.completionBar.style.width = t.completion + '%';
      els.soldBar.style.width = t.sold + '%';
    });
    setTimeout(() => els.view.focus(), 350);
  }

  function close() {
    modal.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    if (activeHotspot) { activeHotspot.classList.remove('is-active'); activeHotspot.setAttribute('aria-expanded', 'false'); }
    if (MasterPlan) MasterPlan.reset();
    if (activeHotspot) activeHotspot.focus();
    activeTower = null; activeHotspot = null;
  }

  if (MasterPlan && MasterPlan.hotspots) {
    MasterPlan.hotspots.forEach(h => Utils.on(h, 'click', () => open(h.dataset.tower, h)));
  }
  Utils.on(Utils.$('#tm-close'), 'click', close);
  Utils.on(Utils.$('#tm-backdrop'), 'click', close);
  Utils.on(document, 'keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('is-open')) close(); });

  Utils.on(els.view, 'click', () => {
    if (!activeTower) return;
    close();
    if (typeof UnitsView !== 'undefined' && UnitsView.selectBuilding) UnitsView.selectBuilding(activeTower.id);
    Views.show('units');
  });
  Utils.on(els.brochure, 'click', () => {
    if (!activeTower) return;
    const nm = els.name.textContent;
    els.brochure.disabled = true;
    const original = els.brochure.textContent;
    els.brochure.textContent = 'جاري التحميل...';
    setTimeout(() => {
      els.brochure.disabled = false;
      els.brochure.textContent = original;
      alert('تم بدء تحميل بروشور: ' + nm + ' بنجاح.');
    }, 1100);
  });
  Utils.on(els.visit, 'click', () => {
    if (!activeTower) return;
    const nm = els.name.textContent;
    const msg = Utils.$('#fm');
    if (msg) msg.value = 'أرغب في حجز معاينة لـ ' + nm + '.';
    close();
    Views.goContact();
  });
  Utils.on(els.contact, 'click', () => {
    if (!activeTower) return;
    const nm = els.name.textContent;
    const msg = Utils.$('#fm');
    if (msg) msg.value = 'أرغب في التواصل مع فريق المبيعات بخصوص ' + nm + '.';
    close();
    Views.goContact();
  });

  return { open, close };
})();
