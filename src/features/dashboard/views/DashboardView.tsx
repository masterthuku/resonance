import PageHeader from "@/components/PageHeader";
import HeroPattern from "../components/HeroPattern";
import DashboardHeader from "../components/DashboardHeader";

const DashboardView = () => {
  return (
    <div className="relative">
      <PageHeader title="Home" className="lg:hidden" />
      <HeroPattern />
      <div className="relative space-y-8 p-4 lg:p-16">
        <DashboardHeader/>
      </div>
    </div>
  );
};

export default DashboardView;
