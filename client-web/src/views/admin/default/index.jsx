import MiniCalendar from "components/calendar/MiniCalendar";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import TotalSpent from "views/admin/default/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import TaskCard from "views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "context/auth-context";
import AppointmentBooking from "./components/AppointmentBooking";
import Card from "components/card";

const Dashboard = () => {
  const { userPortfolio, setUserPortfolio } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { portfolio, message },
        } = await axios.get(`http://localhost:5000/portfolio`, {
          withCredentials: true,
        });

        if (portfolio) {
          setUserPortfolio(portfolio);
        } else {
          toast.error(message);
        }
      } catch (error) {
        if (error.response?.data.message) {
        }
      }
    })();
  }, []);

  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Age (yrs)"}
          subtitle={userPortfolio?.age ?? "NA"}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Weight (kgs)"}
          subtitle={userPortfolio?.weight ?? "NA"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Height (cm)"}
          subtitle={userPortfolio?.height ?? "NA"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Organ Name"}
          subtitle={userPortfolio?.organName ?? "NA"}
        />
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"Blood Group"}
          subtitle={userPortfolio?.bloodGroup ?? "NA"}
        />
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          title={"Gender"}
          subtitle={userPortfolio?.gender ?? "NA"}
        />
      </div>

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-1">
        {/* <TotalSpent />
        <WeeklyRevenue /> */}
        <AppointmentBooking />
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
        {/* <div>
          <CheckTable
            columnsData={columnsDataCheck}
            tableData={tableDataCheck}
          />
        </div> */}
        <Card extra={"py-10 w-full h-full sm:overflow-auto px-6"}>
          <div>
            <h2 class="text-2xl font-semibold">Benefits of Kidney Donation</h2>
            <p>
              Kidney donation is a selfless act that can save lives and have a
              positive impact on both the donor and the recipient. Here's what
              you need to know:
            </p>
            <ul class="mt-4 list-inside list-disc">
              <li>
                Saving a Life: By donating a kidney, you have the opportunity to
                save someone's life who is suffering from kidney failure.
              </li>
              <li>
                Health Benefits: Living kidney donors often experience improved
                health after donation, including better blood pressure control
                and kidney function.
              </li>
              <li>
                Emotional Satisfaction: Knowing that you've made a life-changing
                difference in someone's life can bring a deep sense of
                fulfillment and purpose.
              </li>
              <li>
                Medical Evaluation: As a donor, you'll undergo thorough medical
                testing and receive a comprehensive health assessment, which can
                help identify any underlying health issues.
              </li>
            </ul>
          </div>
        </Card>

        {/* Traffic chart & Pie Chart */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div>

        {/* Complex Table , Task & Calendar */}

        {/* <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        /> */}
        <Card extra={"pt-3 w-full h-full sm:overflow-auto px-6"}>
          <div>
            <h2 class="text-2xl font-semibold">Kidney Donation Process</h2>
            <ul class="mt-4 list-inside list-decimal">
              <li>
                Medical Evaluation: Potential donors undergo a series of medical
                and psychological evaluations to ensure they are healthy and
                suitable for donation.
              </li>
              <li>
                Surgery: Kidney donation involves a surgical procedure where one
                kidney is removed. The surgery is typically minimally invasive
                and has a relatively short recovery time.
              </li>
              <li>
                Recovery: Donors typically spend a few days in the hospital and
                a few weeks recovering at home. Most donors can return to their
                normal activities within a few months.
              </li>
              <li>
                Follow-Up Care: Donors receive ongoing medical follow-up care to
                ensure their well-being after donation.
              </li>
            </ul>
          </div>
        </Card>

        {/* Task chart & Calendar */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
