import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AttachmentIcon from "@mui/icons-material/Attachment";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import Header from "./Header";
import { Box } from "@mui/material";

const iconData = [
  {
    icon: <CalendarMonthIcon fontSize="large" />,
    label: "Calendar",
    color: "#FF5733",
  },
  {
    icon: <AccessTimeIcon fontSize="large" />,
    label: "Upcoming Tasks",
    color: "#FFC300",
  },
  {
    icon: <AccountCircleIcon fontSize="large" />,
    label: "Leave Balance",
    color: "#C70039",
  },
  {
    icon: <AssignmentTurnedInIcon fontSize="large" />,
    label: "Work Complition Report",
    color: "#C70039",
  },
  {
    icon: <AttachMoneyIcon fontSize="large" />,
    label: "Payslips",
    color: "#900C3F",
  },
  { icon: <AttachmentIcon fontSize="large" />, label: "Tax", color: "#900C3F" },
  {
    icon: <PeopleAltIcon fontSize="large" />,
    label: "Employee Details",
    color: "#900C3F",
  },
  {
    icon: <PriceChangeIcon fontSize="large" />,
    label: "Reimbersement",
    color: "#900C3F",
  },

  // Add more icon-color pairs as needed
];

const BodyPage = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Container style={{ paddingTop: "20px", marginRight: "20px" }}>
        <Box my={2}>
          <Typography variant="h5" component="div">
            My Access
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {iconData.map((data, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <div
                style={{
                  textAlign: "center",
                  padding: "26px",
                  margin: "20px",
                  borderRadius: "8px",
                  background: "#EAEAEA",
                }}
              >
                <IconButton
                  color="primary"
                  aria-label={data.label}
                  style={{
                    color: data.color,
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    marginBottom: "8px",
                  }}
                >
                  {data.icon}
                </IconButton>
                <Typography variant="subtitle1">{data.label}</Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default BodyPage;
