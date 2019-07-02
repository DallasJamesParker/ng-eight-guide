import { AlertMessageType } from '../variables/enums/alertTypes';

export interface IAlertMessage {
  type: AlertMessageType;
  priority: number;
  message: string;
}
