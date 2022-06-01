require("dotenv").config();

module.exports = {
    TOKEN: process.env.TOKEN || "",  // your bot token
    PREFIX: process.env.PREFIX || "", //<= default is #  // bot prefix

    OWNER_ID: process.env.OWNER_ID || "", //your owner discord id example: "515490955801919488" this is not id like *Stylish.#4078

    NP_REALTIME: process.env.NP_REALTIME || "true", // "true" = realtime, "false" = not realtime :3 // WARNING: on set to "true" = laggy
    LEAVE_TIMEOUT: parseInt(process.env.LEAVE_TIMEOUT || "120000"), // leave timeout default "120000" = 2 minutes // 1000 = 1 seconds

    DEV_ID: [], // if you want to use command bot only, you can put your id here  // example: ["515490955801919488", "543595284345782296"]

    MONGO_URI: process.env.MONGO_URI || "", // your mongo uri
    LIMIT_TRACK: parseInt(process.env.LIMIT_TRACK || "1000000"),  //<= dafault is "100" // limit track in playlist
    LIMIT_PLAYLIST: parseInt(process.env.LIMIT_PLAYLIST || "10"), //<= default is "10" // limit can create playlist

    NODES: [
      { 
        host: process.env.NODE_HOST || "",
        port: parseInt(process.env.NODE_PORT || ""),
        password: process.env.NODE_PASSWORD || "",
      } 
    ],
}