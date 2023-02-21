"use client";
import React, { ReactElement } from "react";
import { Title } from "../components";
import useSWR from "swr";
import styles from "./Work.module.scss";
import { Workplace } from "../interfaces";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const WorkPage = (): ReactElement => {
  const { data, error, isLoading } = useSWR<Workplace[], any, any>(
    "/api/work",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className={styles.container}>
      <Title title="Work" />
      <div>
        {data?.map(({ from, to, name, location, logo, projects }) => (
          <div>
            <div>{from}</div>
            <div>{to}</div>
            <div>{name}</div>
            <div>{location}</div>
            <div>{logo}</div>
            {projects.map(({ description, role, technologies }) => (
              <div>
                <div>{description}</div>
                <div>{role}</div>
                <ul>
                  {technologies.map((tech) => (
                    <li>{tech}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

type Props = {
  workplace: {
    name: string;
    from: string;
    to: string;
    location: string;
    logo?: string;
    projects: {
      description: string;
      role: string;
      keyTechnologies: string[];
    }[];
  }[];
};

export default WorkPage;
