const dropRight = <T>(arr: T[], count = 1) => count ? arr.slice(0, -count) : [...arr];

export default dropRight;