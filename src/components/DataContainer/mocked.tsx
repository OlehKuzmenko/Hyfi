import { DataContainerListType } from '.';

export const DataContainerData = [
  {
    title: 'Soft Cap',
    value: `$${(2000).toLocaleString('EN-gb')}`,
    badge:
      'Nisl tincidunt eget nullam non nisi est sit amet facilisis\n' +
      '                        magna etiam tempor orci eu lobortis elementum nibh tellus\n' +
      '                        molestie',
    type: DataContainerListType.BADGE,
  },
  {
    title: 'Total Commited',
    value: `$${(2000000).toLocaleString('EN-gb')}`,
    type: DataContainerListType.GENERAL,
  },
  {
    title: 'Participants',
    value: 10000,
    type: DataContainerListType.GENERAL,
  },
  {
    title: 'Hard Cap',
    value: `$${(2000000000).toLocaleString('EN-gb')}`,
    badge:
      'Nisl tincidunt eget nullam non nisi est sit amet facilisis\n' +
      '                        magna etiam tempor orci eu lobortis elementum nibh tellus\n' +
      '                        molestie',
    type: DataContainerListType.BADGE,
  },
  {
    title: 'ROI',
    value: '',
    badge:
      'Nisl tincidunt eget nullam non nisi est sit amet facilisis\n' +
      '                        magna etiam tempor orci eu lobortis elementum nibh tellus\n' +
      '                        molestie',
    type: DataContainerListType.BADGE,
  },
  {
    title: 'Raised',
    value: `$${(5584000).toLocaleString('EN-gb')}`,
    type: DataContainerListType.GENERAL,
  },
  {
    title: 'Fee',
    value: 4 + '%',
    type: DataContainerListType.GENERAL,
  },
  {
    title: 'Funds to raise',
    value: 20 + 'K',
    type: DataContainerListType.GENERAL,
  },
];

export const TitleContainerData = [
  {
    title: 'One Page Info',
    type: DataContainerListType.SHARE,
  },
  {
    title: 'Link to License',
    type: DataContainerListType.SHARE,
  },
  {
    title: 'View Contract',
    type: DataContainerListType.SHARE,
  },
];
