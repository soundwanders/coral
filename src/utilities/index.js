import data from '../db.json';

export const HoverEffect = `rgba(0, 0, 0, 0.15) 0px 12px 30px 1px`;
export const CardShadow = `rgba(0, 0, 0, 0.1) 2px 10px 20px -4px, rgba(0, 0, 0, 0.04) 0px 8px 8px -6px`;
export const SearchBarShadow = `rgba(0, 0, 0, 0.1) 0px 8px 12px -6px , rgba(0, 0, 0, 0.04) 0px 8px 8px -6px`;
export const ThemeColor = '#6161ff';
export const DarkTheme = '#162349';
export const White = '#fbfbfb';
export const PrimaryBadgeColor = '#5858f5';
export const PaidGreen = '#2d8600';
export const LateRed = '#e55054';

export const ThemeColorPalette = [
  '#6161ff',
  '#7070ff',
  '#5757e5',
  '#9090ff',
  '#7e7eff',
  '#6186ff',
  '#7070ff',
  '#5a5ae5',
];

export const DeepBluePalette = [
  '#004d6e',
  '#3280a1',
  '#1d597e',
  '#32667c',
  '#195e7c',
  '#39758e',
  '#3277a1',
  '#125580',
  '#00577c',
];

export const PurplePalette = [
  '#b3b5ea',
  '#c7c9ef',
  '#dbdcf5',
  '#c1c3ff',
  '#b3b6e9',
  '#bcc3eb',
  '#818ed9',
  '#95a0df',
];

export const IceCreamPalette = [
  '#cfcfff',
  '#b8ace5',
  '#c2bfeb',
  '#ccb3ff',
  '#d7c9ff',
  '#c894fd',
  '#ccbef9',
  '#b29ae0',
];

export const PastelPalette = ['#f6a6b2', '#9cfbac', '#bfc6ff', '#ffd7b5', '#ffaed6', '#bfe6ff'];

const RevenueArray = data.clients.map(client => client.totalSales);
export const TotalRevenue = RevenueArray.reduce(function (total, saleValue) {
  return total + saleValue;
}, 0);

const ProjectArray = data.clients.map(client => client.projects);
export const TotalProjects = ProjectArray.reduce(function (total, projectValue) {
  return total + projectValue;
}, 0);

const ClientArray = data.clients.map(client => client.name);
export const TotalClients = ClientArray.length;
