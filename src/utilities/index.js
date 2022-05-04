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
export const BluePalette = [
  '#6161ff',
  '#7070ff',
  '#5757e5',
  '#9090ff',
  '#7e7eff',
  '#6186ff',
  '#7070ff',
];
export const BluePaletteTwo = [
  '#6186ff',
  '#9090ff',
  '#7070ff',
  '#5757e5',
  '#7e7eff',
  '#6161ff',
  '#7070ff',
];
export const PastelPalette = [
  '#f6a6b2',
  '#cdfdd5',
  '#ffecb8',
  '#bfc6ff',
  '#ffd7b5',
  '#bfe6ff',
  '#ffc7e3',
];

const RevenueArray = data.clients.map(client => client.totalSales);
export const TotalRevenue = RevenueArray.reduce(function (total, saleValue) {
  return total + saleValue;
}, 0);

const ProjectArray = data.clients.map(client => client.projects);
export const TotalProjects = ProjectArray.reduce(function (total, projectValue) {
  return total + projectValue;
}, 0);

const ClientArray = data.clients.map(index => index.length);
export const TotalClients = ClientArray.reduce(function (total, clients) {
  return total + clients;
}, 0);
