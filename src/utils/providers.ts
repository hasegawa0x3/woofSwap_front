import { StaticJsonRpcProvider } from '@ethersproject/providers'

export const BSC_PROD_NODE = process.env.NEXT_PUBLIC_NODE_PRODUCTION || 'https://rpc1.shadowswap.xyz'

export const bscRpcProvider = new StaticJsonRpcProvider(BSC_PROD_NODE)

export default null
