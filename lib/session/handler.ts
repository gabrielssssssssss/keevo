class Session {
  private static instance: Session
  private sess: string

  private constructor() {
    this.sess = "default"
  }

  static Instance(): Session {
    if (!Session.instance) {
      Session.instance = new Session()
    }
    return Session.instance
  }

  Get(): string {
    return this.sess
  }

  Set(value: string): void {
    this.sess = value
  }
}

export const session = Session.Instance()