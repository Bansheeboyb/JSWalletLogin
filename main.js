/** Connect to Moralis server */
const serverUrl = "https://xls3dokd01is.usemoralis.com:2053/server";
const appId = "YGzDynVg8uE12Yn3psnTo3kBB9mbt03EV2jsszrN";
Moralis.start({
  serverUrl,
  appId,
});

/** Add from here down */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    const authOptions = {
      provider: "walletconnect",
      signingMessage: "Hello World!",
      chainId: 56,
    };
    user = await Moralis.authenticate(authOptions)
      .then(function (user) {
        console.log("logged in user:", user);
        console.log(user.get("ethAddress"));
      })
      .catch(function (error) {
        console(error);
      });
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;
