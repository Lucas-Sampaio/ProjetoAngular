export class StringUtils {

  public static isNullOrEmpty(val: string | null): boolean {
    if (val === undefined || val === null || val.trim() === '') {
      return true;
    }
    return false;
  }

  public static somenteNumeros(numero: string) : string {
    return numero.replace(/\D/g,'');
  }
}
