import l1Wallet from 'src/wallets/l1Wallet'
import l2ArbitrumWallet from 'src/wallets/l2ArbitrumWallet'
import l2OptimismWallet from 'src/wallets/l2OptimismWallet'
import l2xDaiWallet from 'src/wallets/l2xDaiWallet'

export const wallets = {
  kovan: l1Wallet,
  arbitrum: l2ArbitrumWallet,
  optimism: l2OptimismWallet,
  xdai: l2xDaiWallet
}