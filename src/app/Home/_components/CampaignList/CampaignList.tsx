import CampaignCard from '../CampaignCard/CampaignCard';
import QueryWrapper from '../../../common/QueryWrapper';
import { useList } from '../../../../hooks/campaign/useList';

const CampaignList: React.FC = () => {
  const { data: campaigns, isLoading, error } = useList();
  console.log(campaigns);
  return (
    <div
      className="px-4 md:px-8 lg:px-12 lg:my-12 lg:py-12 lg:h-5/6 my-12 py-12 bg-secondary-100"
      id="campaign-list"
    >
      <section className="mx-auto max-w-screen-xl px-4 lg:px-8 flex flex-col gap-10">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
          Explore campaigns
        </h2>
        <QueryWrapper isLoading={isLoading} error={error}>
          {campaigns && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {campaigns.map((campaign) => (
                <CampaignCard key={campaign.id} campaign={campaign} />
              ))}
            </div>
          )}
        </QueryWrapper>
      </section>
    </div>
  );
};

export default CampaignList;