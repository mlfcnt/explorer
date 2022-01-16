export class Distance {
  public formattedDistance: number;
  public formattedDistanceWithUnit: string;
  constructor(private readonly distanceInKm: number) {
    this.formattedDistance = this.formatDistance();
    this.formattedDistanceWithUnit = this.formatDistanceWithUnit();
  }

  private formatDistance() {
    if (this.distanceInKm <= 0) return 0;
    return Math.round(this.distanceInKm * 100) / 100;
  }

  private formatDistanceWithUnit() {
    return `${this.formatDistance()} km`;
  }
}
