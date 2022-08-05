import NumberUtils from './number';

interface ILogInUtility {
  verify: (pin: string) => Promise<boolean>;
}

enum Default {
  PIN = '1234',
}

const LogInUtility: ILogInUtility = {
  verify: async (pin: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (pin === Default.PIN) {
          resolve(true);
        } else {
          reject(`Invalid pin: ${pin}`);
        }
      }, NumberUtils.rand(300, 700));
    });
  },
};

export default LogInUtility;
