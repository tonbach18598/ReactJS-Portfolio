const MOCK = {
  LOCALIZATION: {
    en: {
      page7_title: 'Leave me a message',
      page0: 'My CV',
      page5: 'Blog',
      page8: 'Payment',
      page1_button2: 'Contact me',
      page6: 'Service',
      page7_field2: 'Message',
      footer: 'Copyright © {{time}} by {{username}}',
      page2_title2: 'My name is {{username}} and I am a {{specialty}}.',
      page4: 'Project',
      page2_title1: 'Hello World!',
      page3_title2: 'Experience',
      page3_title1: 'Education',
      page7_button: 'Send',
      page3: 'Resume',
      page_error: 'Not Found',
      page4_title3: 'Personal',
      page2: 'About',
      page4_title1: 'Company',
      page1_title: 'Welcome to my home!',
      page7_field2_error: 'Message is required',
      page4_title2: 'Freelance',
      page7_field1: 'Name',
      page7: 'Contact',
      page1: 'Home',
      page2_title3: 'I have worked with',
      page7_field1_error: 'Name is required',
      page1_button1: 'About me',
    },
    vi: {
      page0: ' CV của tôi',
      page3_title1: 'Học vấn',
      page8: 'Thanh toán',
      page4_title2: 'Tự do',
      page2: 'Về tôi',
      footer: ' Bản quyền © {{time}} của {{username}}',
      page1_button2: 'Liên hệ tôi',
      page7_field1: 'Tên',
      page6: 'Dịch vụ',
      page1_title: 'Chào mừng đến với trang của tôi!',
      page4_title3: 'Cá nhân',
      page4: 'Dự án',
      page3_title2: 'Kinh nghiệm',
      page1_button1: 'Về tôi',
      page7_field1_error: 'Tên là bắt buộc',
      page2_title2: 'Tên tôi là {{username}} và tôi là {{specialty}}.',
      page_error: 'Không tìm thấy',
      page7_field2_error: 'Tin nhắn là bắt buộc',
      page7_field2: 'Tin nhắn',
      page4_title1: 'Công ty',
      page5: 'Bài viết',
      page2_title3: 'Tôi từng làm việc với',
      page7_title: 'Để lại tin nhắn',
      page1: 'Trang chủ',
      page7: 'Liên hệ',
      page2_title1: 'Xin chào!',
      page7_button: 'Gửi',
      page3: 'Hồ sơ',
    },
  },
  CONFIG: {
    homeVisible: true,
    image: {
      error404:
        'https://raw.githubusercontent.com/bachbnt/assets/main/config/error-404.png',
      comingSoon:
        'https://raw.githubusercontent.com/bachbnt/assets/main/config/coming-soon.png',
    },
    contactEnable: true,
    appIcon:
      'https://raw.githubusercontent.com/bachbnt/assets/main/config/logo.png',
    appTitle: 'Bach Bui',
    cvEnable: true,
    language: 'en',
    paymentEnable: true,
    resumeEnable: true,
    blogEnable: false,
    blogVisible: false,
    paymentVisible: true,
    contactVisible: true,
    projectEnable: true,
    cvVisible: true,
    serviceEnable: true,
    aboutEnable: true,
    projectVisible: true,
    homeEnable: true,
    serviceVisible: true,
    resumeVisible: true,
    aboutVisible: true,
  },
  CONTACT: {
    id: 'test',
    data: {
      type: 'address',
      urlEnable: true,
      index: 1,
      icon: 'Home',
      visible: true,
      url: 'https://www.google.com/maps/place/Ho+Chi+Minh+City/',
      name: 'Ho Chi Minh City, Vietnam',
      nameVisible: true,
    },
  },
  EDUCATION: {
    id: 'test',
    data: {
      majorVisible: false,
      imageVisible: true,
      name: 'University of Science',
      major: 'Physics',
      image:
        'https://raw.githubusercontent.com/bachbnt/assets/main/resume/bachelor.jpg',
      nameVisible: true,
      visible: true,
      time: 'Sep 2016 - Sep 2020',
      timeVisible: true,
      degreeVisible: true,
      degree: 'Bachelor of Science',
      index: 1,
    },
  },
  EXPERIENCE: {
    id: 'test',
    data: {
      visible: true,
      timeVisible: true,
      position: 'Mobile Developer',
      responsibility: 'Developing applications',
      index: 5,
      image:
        'https://raw.githubusercontent.com/bachbnt/assets/main/resume/momo.jpeg',
      imageVisible: true,
      responsibilityVisible: true,
      positionVisible: true,
      time: 'May 2022 - Present',
      nameVisible: true,
      name: 'M_Service (MoMo)',
    },
  },
  PROFILE: {
    covers: [
      {
        index: 1,
        url: 'https://raw.githubusercontent.com/bachbnt/assets/main/profile/cover1.jpeg',
        visible: true,
      },
      {
        visible: true,
        index: 2,
        url: 'https://raw.githubusercontent.com/bachbnt/assets/main/profile/cover5.jpeg',
      },
    ],
    cv: 'https://www.topcv.vn/xem-cv/Aw0DAAUAUVUHAQRTA1RXUQwHUQANBgdXUgECUg90a6',
    summary:
      'My background is the Master of Science. Because of my passion for programming, I chose Software Engineer as my profession. With knowledge and experience in technology, I want to become a Project Manager in the future.',
    name: 'Bach Bui',
    avatar:
      'https://raw.githubusercontent.com/bachbnt/assets/main/profile/avatar.jpeg',
    specialties: [
      {
        name: 'Mobile Developer',
        visible: true,
        index: 1,
      },
      {
        index: 2,
        name: 'Web Developer',
        visible: true,
      },
      {
        visible: true,
        index: 0,
        name: 'Software Engineer',
      },
    ],
  },
  PROJECT: {
    id: 'test',
    data: {
      nameVisible: true,
      technologyVisible: true,
      refs: ['https://apps.apple.com/vn/app/venus-ai/id6462872236'],
      name: 'VenusAI',
      covers: [
        'https://raw.githubusercontent.com/bachbnt/assets/main/project/venusai/01.png',
        'https://raw.githubusercontent.com/bachbnt/assets/main/project/venusai/02.png',
        'https://raw.githubusercontent.com/bachbnt/assets/main/project/venusai/03.png',
        'https://raw.githubusercontent.com/bachbnt/assets/main/project/venusai/04.png',
        'https://raw.githubusercontent.com/bachbnt/assets/main/project/venusai/05.png',
        'https://raw.githubusercontent.com/bachbnt/assets/main/project/venusai/06.png',
        'https://raw.githubusercontent.com/bachbnt/assets/main/project/venusai/07.png',
      ],
      type: 'freelance',
      visible: true,
      technology: 'Flutter, Firebase',
      index: 4,
      descriptionVisible: true,
      description: 'AI avatars creation app',
      coverVisible: true,
      cover:
        'https://raw.githubusercontent.com/bachbnt/assets/main/project/venusai/venusai.png',
    },
  },
  SERVICE: {
    id: 'test',
    data: {
      visible: true,
      name: 'App Development',
      nameVisible: true,
      descriptionVisible: true,
      index: 1,
      description:
        'Developing Android & iOS applications using Flutter & React Native. Be able to work with native applications using Kotlin & Swift.',
    },
  },
  SKILL: {
    id: 'test',
    data: {
      urlEnable: true,
      name: 'ReactJS',
      url: 'https://reactjs.org/',
      index: 3,
      nameVisible: true,
      visible: true,
      type: 'framework',
    },
  },
  PAYMENT: {
    id: 'test',
    data: {
      logo: '',
      logoVisible: false,
      type: 'bank',
      index: '1',
      qrCode:
        'https://raw.githubusercontent.com/bachbnt/assets/main/payment/qr-bidv-v2.jpg',
      accountVisible: true,
      user: 'BUI NGO TON BACH',
      nameVisible: true,
      userVisible: false,
      account: '6010822107',
      qrCodeVisible: true,
      visible: true,
      name: 'BIDV',
    },
  },
};

export default MOCK;
