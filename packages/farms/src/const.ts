import { FixedNumber, BigNumber } from '@ethersproject/bignumber'

export const FIXED_ZERO = FixedNumber.from(0)
export const FIXED_ONE = FixedNumber.from(1)
export const FIXED_TWO = FixedNumber.from(2)

export const BIG_TEN = BigNumber.from(10)

export const FIXED_TEN_IN_POWER_18 = FixedNumber.from(BIG_TEN.pow(18))

export const masterChefAddresses = {
  97: '0xB4A466911556e39210a6bB2FaECBB59E4eB7E43d',
  1116: '0xc7887AF5F95CDEe2B7bbFf47554104E8631751Df',
}

export const nonBSCVaultAddresses = {
  5: '0x8CB958bBdb45597cc918147469eb650A9397aBDA',
}
