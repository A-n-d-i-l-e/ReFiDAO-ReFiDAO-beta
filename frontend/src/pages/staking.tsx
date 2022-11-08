import { useState } from 'react';
import type { NextPageWithLayout } from '@/types';
import cn from 'classnames';
import { NextSeo } from 'next-seo';
import Button from '@/components/ui/button';
import CoinInput from '@/components/ui/coin-input';
import TransactionInfo from '@/components/ui/transaction-info';
import { SwapIcon } from '@/components/icons/swap-icon';
import Layout from '@/layouts/_layout';
import Trade from '@/components/ui/trade';
import { RadioGroup } from '@/components/ui/radio-group';
import Input from '@/components/ui/forms/input';
import InputLabel from '@/components/ui/input-label';

const StakingPage: NextPageWithLayout = () => {
  let [plan, setPlan] = useState('6%');
  function Period() {
    return (
      <RadioGroup
        value={plan}
        onChange={setPlan}
        className="grid grid-cols-4 gap-2 p-5"
      >
        <RadioGroup.Option value="6%">
          {({ checked }) => (
            <span
              className={`flex h-9 cursor-pointer items-center justify-center rounded-lg border border-solid text-center text-sm font-medium uppercase tracking-wide transition-all ${
                checked
                  ? 'border-blue2 bg-blue2 text-white shadow-button'
                  : 'border-gray-200 bg-white text-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white'
              }`}
            >
              6 Months
            </span>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option value="9%">
          {({ checked }) => (
            <span
              className={`flex h-9 cursor-pointer items-center justify-center rounded-lg border border-solid text-center text-sm font-medium uppercase tracking-wide transition-all ${
                checked
                  ? 'border-blue2 bg-blue2 text-white shadow-button'
                  : 'border-gray-200 bg-white text-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white'
              }`}
            >
              12 Months
            </span>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option value="12%">
          {({ checked }) => (
            <span
              className={`flex h-9 cursor-pointer items-center justify-center rounded-lg border border-solid text-center text-sm font-medium uppercase tracking-wide transition-all ${
                checked
                  ? 'border-blue2 bg-blue2 text-white shadow-button'
                  : 'border-gray-200 bg-white text-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white'
              }`}
            >
              18 Months
            </span>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option value="15%">
          {({ checked }) => (
            <span
              className={`flex h-9 cursor-pointer items-center justify-center rounded-lg border border-solid text-center text-sm font-medium uppercase tracking-wide transition-all ${
                checked
                  ? 'border-blue2 bg-blue2 text-white shadow-button'
                  : 'border-gray-200 bg-white text-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white'
              }`}
            >
              24 Months
            </span>
          )}
        </RadioGroup.Option>
      </RadioGroup>
    );
  }
  let [toggleCoin, setToggleCoin] = useState(false);
  return (
    <>
      <NextSeo
        title="Staking"
        description="Staking"
      />
      <div className="text-sm pt-8 xl:pt-10">
      <div className="mx-auto w-full max-w-lg rounded-lg bg-white p-5 pt-4 shadow-card dark:bg-light-dark xs:p-6 xs:pt-5">
          <nav className="mb-5 min-h-[40px] border-b border-dashed border-gray-200 pb-2 uppercase tracking-wider dark:border-gray-700 xs:mb-6 xs:pb-2 xs:tracking-wide">
            <h2 className="font-medium">Participant Staking</h2>
            <Period/>
          </nav>
          <div className="flex flex-col xs:gap-[18px] border-b border-dashed  border-gray-200 pb-4 dark:border-gray-800 ">
            <TransactionInfo label={'Lock period'}/>
            <TransactionInfo label={'APR'} value={plan}/>
            <TransactionInfo label={'Status'} value={'Unlocked'}/>
          </div>
          <div className="mt-5  xs:pb-6">
              <div
                className={cn(
                  'relative flex gap-3',
                  toggleCoin ? 'flex-col-reverse' : 'flex-col'
                )}
              >
              <div className="">
                <InputLabel title="Balance: 50 RefiDAO" />
                <div className="grid grid-cols-4 gap-5">
                  <Input
                    min={0}
                    type="number"
                    placeholder="0"
                    inputClassName="spin-button-hidden"
                    className="col-span-3"
                  />
                  <Button className="mt-2" shape="rounded" size="small">Approve</Button>
                </div>
              </div>
              <div className="">
                <InputLabel title="Staked: 100 RefiDAO" />
                <div className="grid grid-cols-4 gap-5">
                  <Input
                    min={0}
                    type="number"
                    placeholder="0"
                    inputClassName="spin-button-hidden"
                    className="col-span-3"
                  />
                  <Button className="mt-2" shape="rounded" size="small" color="success">Withdraw</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

StakingPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default StakingPage;
