module.exports = async ({ deployments, getNamedAccounts }) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    await deploy("EightPayTokenV2", { from: deployer });
}
