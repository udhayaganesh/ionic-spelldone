export class Utility {
  public static playAudio(ev: any) {
    if (ev.children) {
      ev.children[0].play();
    } else {
      ev.currentTarget.children[0].play();
    }
  }

  public static findObjectByKey(id: any, list: any, key: string): any {
    let object: any;
    if (list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i][key] === id) {
          object = list[i];
          break;
        }
      }
    }
    return object;
  }

  public static findIndexAndObjectByKey(id: any, list: any, key: string): any {
    let object: any = {};

    if (list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i][key] === id) {
          object.data = list[i];
          object.index = i;
          break;
        }
      }
    }
    return object;
  }

  public static findIndexAndObjectBySubKey(id: any, list: any, key: string, subkey: string): any {
    let object: any = {};

    if (list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i][key][subkey] === id) {
          object.data = list[i];
          object.index = i;
          break;
        }
      }
    }
    return object;
  }
}