interface ITimeUtility {
  format: (date: Date) => string;
  formatHours: (hours: number) => number;
  formatSegment: (segment: number) => string;
}

const TimeUtils: ITimeUtility = {
  format: (date: Date): string => {
    const hours: number = TimeUtils.formatHours(date.getHours());
    const minutes: number = date.getMinutes();
    // const seconds: number = date.getSeconds();

    return `${hours}:${TimeUtils.formatSegment(minutes)}`;
  },
  formatHours: (hours: number): number => {
    return hours; // hours % 12 === 0 ? 12 : hours % 12;
  },
  formatSegment: (segment: number): string => {
    return segment < 10 ? `0${segment}` : segment + '';
  },
};

export default TimeUtils;
