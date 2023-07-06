export default () => {
  return {
    id: 1,
    slug: 'mega',
    menu_items: [
      {
        id: 1,
        label: 'Topics',
        url: '/topics/',
      },
      {
        id: 2,
        label: 'Research & Analysis',
        children: [
          {
            label: 'Report',
            url: '/type/report/',
          },
          {
            label: 'Case study',
            url: '/type/case-study/',
          },
          {
            label: 'eBook',
            url: '/type/ebook/',
          },
          {
            label: 'Insight',
            url: '/type/insight/',
          },
          {
            label: 'Survey',
            url: '/type/survery/',
          },
        ],
      },
      {
        id: 3,
        label: 'Features & Opinions',
        url: '/type/features-and-opinion/',
      },
      {
        id: 4,
        label: 'Webinars & Podcasts',
        children: [
          {
            label: 'Webinar',
            url: '/type/webinar/',
          },
          {
            label: 'Podcast',
            url: '/type/podcast/',
          },
        ],
      },
      {
        id: 5,
        label: 'Videos',
        url: '/type/video/',
      },
    ],
  }
}
