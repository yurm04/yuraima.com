const STATUS = {
  accepted: {
    name: 'accepted',
    emoji: '🏆'
  },
  pending: {
    name: 'pending',
    emoji: '🤷‍♀️'
  },
  rejected: {
    name: 'rejected',
    emoji: '❌'
  },
  unknown: {
    name: 'unknown',
    emoji: '🤷‍♀️'
  },
}

export const tldrA11y = {
  title: 'TL;DR Accessible Components',
  link: 'https://docs.google.com/document/d/1MH4Yyt9S2XptCyWUIMm9vP9AybunJ-gXaxf_GWA85-Q/edit'
}

export const makingReactA11y = {
  title: 'Making React applications work for everyone',
  link: 'https://docs.google.com/document/d/1bMVXbmEY3NqfdrynIXfoE5e6feCnl0yyUCDyleYUIp0/edit#heading=h.c3yvsyxmlgnx'
}

export const doGoodA11y = {
  title: 'How to do good without doing anything',
  link: 'https://docs.google.com/document/d/1h94w6sQQWUreVRR3jNq45xzj1cQwarasnASgwA0sd0M/edit#'
}

export const toAllTheCode = {
  title: 'To all the Code I\'ve loved Before',
  link: 'https://docs.google.com/forms/d/e/1FAIpQLSdkHVbqdD2eRifTqrb7gsZms3vYGVhCvhzrubymhmzqe6brww/viewform?edit2=2_ABaOnufjBn5hE0vUTwz2YSDoUGbwIg-buGOQFNMyUWKAYJevIgHpi-cCxHRSeR4'
}

export const staticSites = {
  title: 'Static Sites for the 21st Century',
  link: 'https://docs.google.com/document/d/19HyealSJIG0P-DXY0zr6NBL6e_z9RJYwBO8j-hU8rI8/edit#'
}

export const submissionMethods = {
  sessionize: 'Sessionize',
  gdoc: 'Google Doc',
  website: 'Website'
}

const accepted = true

export const submissions = [
  {
    confName: `JSConf Hawai'i`,
    url: `https://www.jsconfhi.com/`,
    talks: [makingReactA11y, doGoodA11y],
    method: submissionMethods.sessionize,
    dueDate: 'Sept 30 2019',
    confDate: 'Feb 2020',
    status: STATUS.rejected.name
  },
  {
    confName: `JSConf Day Italy`,
    url: `https://2020.jsday.it/`,
    talks: [
      {
        ...makingReactA11y,
        subDate: 'Oct 1, 2019'
      }, 
      {
        ...doGoodA11y,
        subDate: 'Oct 1, 2019'
      }, 
      {
        ...tldrA11y,
        subDate: 'Dec 20, 2019'
      }
    ],
    method: gdoc,
    dueDate: '',
    confDate: 'May 2020',
    status: STATUS.accepted.name
  },
  {
    confName: `ReactNext 2020`,
    url: `https://react-next.com/`,
    talks: [makingReactA11y, doGoodA11y, tldrA11y, staticSites],
    method: submissionMethods.sessionize,
    dueDate: 'Feb 15, 2020',
    confDate: 'June 15, 2020',
    status: STATUS.pending.name,
    subDate: ''
  },
  {
    confName: `React Day Norway`,
    url: `https://reactnorway.com/`,
    talks: [
      {
        ...doGoodA11y,
        subDate: 'Nov 11, 2019',
        accepted
      },
      {
        ...staticSites,
        subDate: 'Nov 15 2019', 
      }
    ],
    method: submissionMethods.sessionize,
    dueDate: STATUS.name.unknown,
    confDate: 'June 26, 2020',
    status: STATUS.accepted.name,
  },
  {
    confName: `React Day Norway`,
    url: `https://reactnorway.com/`,
    talks: [
      {
        ...doGoodA11y,
        subDate: 'Nov 11, 2019',
        accepted
      },
      {
        ...staticSites,
        subDate: 'Nov 15 2019', 
      }
    ],
    method: submissionMethods.sessionize,
    dueDate: 'Feb 15, 2020',
    confDate: 'June 15, 2020',
    status: STATUS.accepted.name,
    subDate: ''
  },
  {
    confName: `React Summit`,
    url: `https://reactsummit.com/`,
    talks: [doGoodA11y, makingReactA11y,tldrA11y,staticSites],
    method: submissionMethods.gdoc,
    dueDate: 'Feb 10, 2020',
    confDate: 'April 17, 2020',
    status: STATUS.pending.name,
    subDate: 'Nov 15, 2019'
  },
  {
    confName: `App.js Conf`,
    url: `https://appjs.co/`,
    talks: [makingReactA11y],
    method: submissionMethods.gdoc,
    dueDate: 'Nov 30, 2019',
    subDate: 'Nov 25, 2019',
    confDate: 'April 23, 2020',
    status: STATUS.rejected.name,
  },
  {
    confName: `JSHeroes`,
    url: `https://jsheroes.io/`,
    talks: [doGoodA11y, makingReactA11y,tldrA11y,toAllTheCode],
    method: submissionMethods.website,
    dueDate: 'Dec. 20, 2019',
    subDate: 'Dec. 20, 2019',
    confDate: 'April 23, 2020',
    status: STATUS.pending.name,
  },
  {
    confName: `Reactathon 2020`,
    url: ``,
    talks: [makingReactA11y],
    method: submissionMethods.gdoc,
    dueDate: 'Jan 15, 2020',
    subDate: 'Jan 12, 2020',
    confDate: status.unknown.name,
    status: STATUS.rejected.name,
  },
  {
    confName: `React La Conferencia`,
    url: ``,
    talks: [makingReactA11y, doGoodA11y, tldrA11y],
    method: submissionMethods.gdoc,
    dueDate: 'Feb 15, 2020',
    subDate: status.unknown.name,
    confDate: 'July 18, 2020',
    status: STATUS.pending.name,
  },
  {
    confName: `JSConf MX`,
    url: ``,
    talks: [toAllTheCode],
    method: submissionMethods.gdoc,
    dueDate: 'Feb 7, 2020',
    subDate: 'Feb 4, 2020',
    confDate: 'May 4, 2020',
    status: STATUS.pending.name,
  },
  {
    confName: `React Day NYC`,
    url: ``,
    talks: [doGoodA11y, tldrA11y],
    method: submissionMethods.gdoc,
    dueDate: '',
    subDate: '',
    confDate: '',
    status: STATUS.pending.name,
  },
  {
    confName: `ForwardJS Ottawa`,
    url: `https://forwardjs.com/`,
    talks: [makingReactA11y, tldrA11y, toAllTheCode, doGoodA11y],
    method: submissionMethods.gdoc,
    dueDate: 'Feb 29, 2020',
    subDate: 'Feb 22, 2020',
    confDate: '',
    status: STATUS.pending.name,
  },
]
