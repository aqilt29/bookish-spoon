import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { expect } from "chai";
// import {} from "../typechain";

describe("Example", () => {
  let signers: SignerWithAddress[], accounts: string[];

  before(async () => {
    signers = await ethers.getSigners();
    accounts = await Promise.all(signers.map((signer) => signer.getAddress()));
  });

  beforeEach(async () => {
    // deploy fresh contract(s) per test
  });
});
