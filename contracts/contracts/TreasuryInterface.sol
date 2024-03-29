// SPDX-License-Identifier: Apache-2.0

/**
 * @title The contract that incorporates the logic of the wallet (for internal usage)
 * @notice This contract is used when proposals are stored as structs but not created as individual contract by the factory.
 */
pragma solidity 0.8;

// import "@openzeppelin/contracts/utils/math/SafeMath.sol";
// import "./Wallet.sol";
// import "./ExternalWallet.sol";
// import "./Accessible.sol";
import "./ProposalInterface.sol";

contract TreasuryInterface {
    ProposalInterface proposalGate;

    modifier uponProposalSuccess(bytes32 _proposalID) {
        require(proposalGate.getProposalFinalResult(_proposalID));
        _;
    }

    modifier expectProposalType(bytes32 _proposalID, bool _isGAProposal) {
        require(proposalGate.getProposalType(_proposalID) == _isGAProposal);
        _;
    }
}
