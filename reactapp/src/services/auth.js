const authService = {
  login: (loginData) => {
    for (let key in loginData) {
      localStorage.setItem(key, loginData[key]);
    }
  },
  logout: () => localStorage.clear(),
};

export default authService;
