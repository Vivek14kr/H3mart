
import React from 'react';


import { Button, Table, Spin } from "antd";
import "../App.css";
const numeral = require("numeral");


class Home extends React.Component {
  columns = [
    {
      title: "Rank",
      dataIndex: "rank",
      sorter: (a, b) => b.rank - a.rank,
    },

    {
      title: "Name",
      dataIndex: "name",
      render: (value, row, index) => {
        return (
          <span style={{ display: "flex" }}>
            <img
              style={{
                width: "50px",
                padding: "5px",
                height: "50px",
              }}
              src={`https://assets.coincap.io/assets/icons/${row.symbol.toLowerCase()}@2x.png`}
              alt={`${row.symbol}`}
            />
            <span
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
                marginLeft: 5,
              }}
            >
              <b style={{}}>{row.name}</b>
              <p style={{ marginTop: "-1px" }}>{row.symbol}</p>
            </span>
          </span>
        );
      },
    },
    {
      title: "Price",
      dataIndex: "priceUsd",
    },
    {
      title: "Market Cap",
      dataIndex: "marketCapUsd",
    },
    {
      title: "VWAP (24 Hr)",
      dataIndex: "vwap24Hr",
      render: (value, row, index) => {
        return <p>${value}</p>;
      },
    },
    {
      title: "Supply",
      dataIndex: "supply",
      render: (value, row, index) => {
        return <p>{value.slice(1)}</p>;
      },
    },
    {
      title: "Volume (24 Hr)",
      dataIndex: "volumeUsd24Hr",
      render: (value, row, index) => {
        return <p>{row.volumeUsd24Hr}</p>;
      },
    },
    {
      title: "Change (24 Hr)",
      dataIndex: "changePercent24Hr",
      render: (value, row, index) => {
        return (
          <div
            style={{
              textAlign: "right",
              justifyContent: "right",
              fontSize: "15px",
            }}
          >
            <p
              style={
                row.changePercent24Hr < 0
                  ? { color: "red", marginRight: "55px" }
                  : { color: "#00F700", marginRight: "55px" }
              }
            >
              {row.changePercent24Hr}%
            </p>
          </div>
        );
      },
    },

    //   {
    //     title: "Chinese Score",
    //     dataIndex: "chinese",
    //     sorter: {
    //       compare: (a, b) => a.chinese - b.chinese,
    //       multiple: 3,
    //     },
    //   },
    //   {
    //,title: "Math Score",
    //     dataIndex: "math",
    //     sorter: {
    //       compare: (a, b) => a.math - b.math,
    //       multiple: 2,
    //     },
    //   },
    //   {
    //     title: "English Score",
    //     dataIndex: "english",
    //     sorter: {
    //       compare: (a, b) => a.english - b.english,
    //       multiple: 1,
    //     },
    //   },
  ];
  state = {
    data: [],
    loading:false,
   error:false,
    perpage: 50,
    bool: false,
  };
  formatCurrency(number) {
    let billion = 1000000000;
    let million = 1000000;
    let trillion = 1000000000000;
    let abbreviation = "";

    if (number >= trillion) {
      number = number / trillion;
      abbreviation = "t";
    } else if (number >= billion) {
      number = number / billion;
      abbreviation = "b";
    } else if (number >= million) {
      number = number / million;
      abbreviation = "m";
    }

    let formattedNumber = numeral(number).format("0.00");
    return "$" + formattedNumber + abbreviation;
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    

    const response = await fetch(
      `https://api.coincap.io/v2/assets?limit=${this.state.perpage}`
    ).catch(err => this.setState({ error: true}))
    const result = await response.json();

    let k = [];

    for (let i = 0; i < result.data.length; i++) {
      let obj = {
        symbol: result.data[i].symbol,

        rank: Number(result.data[i].rank),
        name: result.data[i].name,
        priceUsd: this.formatCurrency(Number(result.data[i].priceUsd)),
        marketCapUsd: this.formatCurrency(Number(result.data[i].marketCapUsd)),
        vwap24Hr: Number(result.data[i].vwap24Hr).toFixed(2),
        supply: this.formatCurrency(Number(result.data[i].supply)),
        volumeUsd24Hr: this.formatCurrency(
          Number(result.data[i].volumeUsd24Hr)
        ),
        changePercent24Hr: Number(result.data[i].changePercent24Hr).toFixed(2),
      };
      k.push(obj);
    }

    this.setState({ data: k });
    this.setState({ loading: false });

    if (k.length === 2000) {
      this.setState({ bool: true });
     
    }
  };
  onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  onBtnClick = () => {
    this.setState({ loading: true });

    let num = this.state.perpage + 50;
    this.setState({ perpage: num }, async () => {
      await this.fetchData();
    });
    console.log(this.state.perpage);
  };

  render() {
    return (
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: "fit-content",
        }}
      >
        <div
          style={{
            paddingTop: "6%",
            border: "1px solid red",
            height: 200,
            backgroundColor: "#435BBC",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <div
            style={{
              margin: "auto",
              width: "70%",
              display: "flex",
              justifyContent: "space-around",
              color: "white",
            }}
          >
            <div>
              <h4>MARKET CAP</h4>
              <h4 style={{ marginTop: "-15%" }}>$1.28T</h4>
            </div>
            <div>
              <h4>MARKET CAP</h4>
              <h4 style={{ marginTop: "-15%" }}>$1.28T</h4>
            </div>{" "}
            <div>
              <h4>MARKET CAP</h4>
              <h4 style={{ marginTop: "-15%" }}>$1.28T</h4>
            </div>{" "}
            <div>
              <h4>MARKET CAP</h4>
              <h4 style={{ marginTop: "-15%" }}>$1.28T</h4>
            </div>{" "}
            <div>
              <h4>MARKET CAP</h4>
              <h4 style={{ marginTop: "-15%" }}>$1.28T</h4>
            </div>{" "}
            <div>
              <h4>MARKET CAP</h4>
              <h4 style={{ marginTop: "-15%" }}>$1.28T</h4>
            </div>
          </div>
        </div>

        <div
          style={{
            padding: "20px",
            position: "relative",

            width: "80%",
            margin: "auto",
            marginTop: "-8%",
          }}
        >
          <Table
            style={{
              cursor:"pointer",
              width: "80%",
              marginLeft: "5%",
              marginRight: "5%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              margin: "auto",
              alignItems: "center",
            }}
            columns={this.columns}
            dataSource={this.state.data}
            onChange={this.onChange}
            pagination={false}
          />
        </div>

        <div
          style={{
            paddingBottom: "10px",
            width: "fit-content",
            margin: "auto",
          }}
        >
          {this.state.error ? (
            <b style={{color:"darkred"}}>Error Occured while loading data</b>
          ):
          !this.state.bool ? (
            this.state.loading ? (
              <Spin tip="Loading" size="large">
              
              </Spin>
            ) : (
              <Button
                style={{
                  border: "1px solid black",
                  textAlign: "center",
                  margin: "auto",

                  marginBottom: "20px",
                  alignContent: "center",
                  alignItems: "center",

                  display: "block",
                }}
                type="primary"
                onClick={this.onBtnClick}
              >
                Load More
              </Button>
            )
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
export default Home;
