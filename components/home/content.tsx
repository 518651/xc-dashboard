import React from 'react';
import { Text, Link } from '@nextui-org/react';
import { Box } from '../styles/box';
import dynamic from 'next/dynamic';
import { Flex } from '../styles/flex';
import { TableWrapper } from '../table/table';
import NextLink from 'next/link';
import { CardBalance1 } from './card-balance1';
import { CardBalance2 } from './card-balance2';
import { CardBalance3 } from './card-balance3';
import { CardAgents } from './card-agents';
import { CardTransactions } from './card-transactions';
import { Card, Title, LineChart } from "@tremor/react";

const chartdata = [
   {
     year: 1951,
     "Population growth rate": 1.74,
   },
   {
     year: 1952,
     "Population growth rate": 1.93,
   },
   {
     year: 1953,
     "Population growth rate": 1.9,
   },
   {
     year: 1954,
     "Population growth rate": 1.98,
   },
   {
     year: 1955,
     "Population growth rate": 2,
   },
 ];
 
 const dataFormatter = (number: number) =>
   `${Intl.NumberFormat("us").format(number).toString()}%`;



export const Content = () => (
   
   <Box css={{ overflow: 'hidden', height: '100%' }}>
      <Flex
         css={{
            'gap': '$8',
            'pt': '$5',
            'height': 'fit-content',
            'flexWrap': 'wrap',
            '@lg': {
               flexWrap: 'nowrap',
            },
            '@sm': {
               pt: '$10',
            },
         }}
         justify={'center'}
      >
         <Flex
            css={{
               'px': '$12',
               'mt': '$8',
               '@xsMax': { px: '$10' },
               'gap': '$12',
            }}
            direction={'column'}
         >
            {/* Card Section Top */}
            <Box>
               <Text
                  h3
                  css={{
                     'textAlign': 'center',
                     '@sm': {
                        textAlign: 'inherit',
                     },
                  }}
               >
                  数据看板
               </Text>
               <Flex
                  css={{
                     'gap': '$10',
                     'flexWrap': 'wrap',
                     'justifyContent': 'center',
                     '@sm': {
                        flexWrap: 'nowrap',
                     },
                  }}
                  direction={'row'}
               >
                  <CardBalance1 />
                  <CardBalance2 />
                  <CardBalance3 />
               </Flex>
            </Box>   

            {/* Chart */}
            <Box>
               <Text
                  h3
                  css={{
                     'textAlign': 'center',
                     '@lg': {
                        textAlign: 'inherit',
                     },
                  }}
               >
                  数据统计
               </Text>
               <Box
                  css={{
                     width: '100%',
                     backgroundColor: '$accents0',
                     boxShadow: '$lg',
                     borderRadius: '$2xl',
                     px: '$10',
                     py: '$10',
                  }}
               >
                  <Card>
                     <Title>Population growth rate (1951 to 2021)</Title>
                     <LineChart
                        className="mt-6"
                        data={chartdata}
                        index="year"
                        categories={["Population growth rate"]}
                        colors={["blue"]}
                        valueFormatter={dataFormatter}
                        yAxisWidth={40}
                     />
                  </Card>
               </Box>
            </Box>
         </Flex>

         {/* Left Section */}
         <Box
            css={{
               'px': '$12',
               'mt': '$8',
               'height': 'fit-content',
               '@xsMax': { px: '$10' },
               'gap': '$6',
               'overflow': 'hidden',
            }}
         >
            <Text
               h3
               css={{
                  'textAlign': 'center',
                  '@lg': {
                     textAlign: 'inherit',
                  },
               }}
            >
               Section
            </Text>
            <Flex
               direction={'column'}
               justify={'center'}
               css={{
                  'gap': '$8',
                  'flexDirection': 'row',
                  'flexWrap': 'wrap',
                  '@sm': {
                     flexWrap: 'nowrap',
                  },
                  '@lg': {
                     flexWrap: 'nowrap',
                     flexDirection: 'column',
                  },
               }}
            >
               <CardAgents />
               <CardTransactions />
            </Flex>
         </Box>
      </Flex>

      {/* Table Latest Users */}
      <Flex
         direction={'column'}
         justify={'center'}
         css={{
            'width': '100%',
            'py': '$10',
            'px': '$10',
            'mt': '$8',
            '@sm': { px: '$20' },
         }}
      >
         <Flex justify={'between'} wrap={'wrap'}>
            <Text
               h3
               css={{
                  'textAlign': 'center',
                  '@lg': {
                     textAlign: 'inherit',
                  },
               }}
            >
               任职情况
            </Text>
            <NextLink href="/accounts">
               <Link
                  block
                  color="primary"
                  css={{
                     'textAlign': 'center',
                     '@lg': {
                        textAlign: 'inherit',
                     },
                  }}
               >
                  View All
               </Link>
            </NextLink>
         </Flex>
         <TableWrapper />
      </Flex>
   </Box>
);
