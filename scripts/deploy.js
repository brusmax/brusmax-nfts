const deploy = async () => {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with the account:", deployer.address);

  const BrusmaxPunks = await ethers.getContractFactory("BrusmaxPunks");
  const deployed = await BrusmaxPunks.deploy();

  console.log("Brusmax Punks is deployed at:", deployed.address);
};


deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });



   
