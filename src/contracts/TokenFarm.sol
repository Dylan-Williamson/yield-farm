pragma solidity ^0.5.0;

import "./DigitalMusicToken.sol";
import "./DaiToken.sol";

contract TokenFarm {
  string public name = "Digital Music Token Farm";
  DigitalMusicToken public digitalMusicToken;
  DaiToken public daiToken;

  constructor(DigitalMusicToken _digitalMusicToken, DaiToken _daiToken) public {
    digitalMusicToken = _digitalMusicToken;
    daiToken = _daiToken;
  }
}