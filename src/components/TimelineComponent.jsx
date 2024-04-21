"use client";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from "@mui/icons-material/School";
import { timeLine } from "@/utils";
import WorkIcon from "@mui/icons-material/Work";
import { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";

const TimelineComponent = () => {
  return (
    <div className='w-full flex justify-center py-32'>
      <div className='text-center px-40 max-[480px]:px-[20px] max-[890px]:px-[50px]'>
        <div>
          <h1 className='text-[44px] font-[600]'>
            My <span className='text-[#755BB4]'>Education & Career</span>{" "}
            Timeline
          </h1>
          <p className='text-[14px] dark:text-white text-black font-[500] text-center'>
            {`A career timeline is a visual representation or written summary of an individual's professional journey over time. It typically includes key milestones, achievements, positions held, educational accomplishments, and other significant events related to a person's career. Career timelines are used to provide a concise overview of one's career progression and can be helpful for job seekers, professionals, or individuals reflecting on their career path.`}
          </p>
        </div>
        <div className='mt-5 mx-auto w-full'>
          <Timeline
            sx={{
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.4,
              },
            }}
            className='max-[480px]:mx-auto'
            style={{ flexDirection: "column-reverse", padding: "0" }}
          >
            {timeLine.map((item, index) => {
              return (
                <TimelineItem key={index}>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    style={{ padding: "0" }}
                  >
                    <p className='text-[14px] dark:text-white text-black font-[600] mr-1'>
                      {item.year}
                    </p>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector style={{ backgroundColor: "#755BB4" }} />
                    <TimelineDot style={{ backgroundColor: "white" }}>
                      {item.infoType === "Education" ? (
                        <SchoolIcon style={{ color: "#755BB4" }} />
                      ) : (
                        <WorkIcon style={{ color: "#755BB4" }} />
                      )}
                    </TimelineDot>
                    <TimelineConnector style={{ backgroundColor: "#755BB4" }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <h4 className='text-[18px] text-[#755BB4] font-[600] '>
                      {item.institutionName}
                    </h4>
                    <p className='text-[14px] dark:text-white text-black font-[600] '>
                      {item.description}
                    </p>
                    {item.degree && (
                      <p className='text-[14px] dark:text-white text-black font-[600] '>
                        <span className='text-[#755BB4] font-[600] text-[14px]'>
                          Degree :{" "}
                        </span>
                        {item.degree}
                      </p>
                    )}
                    <div className='flex max-[480px]:flex-wrap gap-2'>
                      <p className='text-[14px] dark:text-white text-black font-[600] '>
                        <span className='text-[#755BB4] font-[600] text-[14px]'>
                          Position :{" "}
                        </span>
                        {item.position}
                      </p>
                      <p className='text-[14px] dark:text-white text-black font-[600] '>
                        <span className='text-[#755BB4] font-[600] text-[14px]'>
                          Location :{" "}
                        </span>
                        {item.location}
                      </p>
                      <p className='text-[14px] dark:text-white text-black font-[600] '>
                        <span className='text-[#755BB4] font-[600] text-[14px]'>
                          Location Type :{" "}
                        </span>
                        {item.locationType}
                      </p>
                    </div>
                    {/* <div>
                      {item.keypoints && (
                        <div>
                          <p className='text-[#755BB4] font-[600] text-[14px]'>
                            Key Points :{" "}
                          </p>
                          <ul>
                            {item?.keypoints.map((k, i) => {
                              return (
                                <li
                                  key={i}
                                  className='dark:text-white text-black font-[600] text-[12px] mt-[2px]'
                                >
                                  {"-"} {k.title}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </div> */}
                    {/* <div>
                      {item.skills && (
                        <div>
                          <p className='text-[#755BB4] font-[600] text-[14px]'>
                            Skills :{" "}
                          </p>
                          <ul className='flex flex-wrap gap-1 justify-start'>
                            {item.skills.map((sk, i) => {
                              return (
                                <>
                                  <li
                                    key={i}
                                    className='text-black dark:text-white font-[600] text-[12px] uppercase'
                                  >
                                    {sk},
                                  </li>
                                  {"  "}
                                </>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </div> */}
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default TimelineComponent;
