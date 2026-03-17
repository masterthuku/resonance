import PageHeader from "@/components/PageHeader";
import HeroPattern from "../components/HeroPattern";
import DashboardHeader from "../components/DashboardHeader";
import TextInputPanel from "../components/TextInputPanel";

const DashboardView = () => {
  return (
    <div className="relative">
      <PageHeader title="Home" className="lg:hidden" />
      <HeroPattern />
      <div className="relative space-y-8 p-4 lg:p-16">
        <DashboardHeader/>
        <TextInputPanel/>
      </div>
    </div>
  );
};

export default DashboardView;
