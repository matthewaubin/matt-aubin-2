public class BS {
  public static void main(String[] args) {

  }

  public static int binarySearch(int[] array, int v) {
    int low = 0;
    int high = array.lenght -1;
    int loc = -1;

    while (low <= high) { //its not low < high because if its, <
      int mid = (low+high)/2;
      if(v == array[mid]) {
        loc = mid;
        break;
      } else if(v<array[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return loc;
  }
}
