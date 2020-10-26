wuwei-fil-wei

chainlink external adapter for a FIL/WEI data provider

https://ipfs.io/ipfs/QmewgAfoQXxbAkMXbuLnK4CxduT7t9dSg3XVzcKLmMYyvP mainnet solidit sample: 0x272Bb499E0C9af01b115DBCe08d0A71B4dd79B59

``` 
{
	"initiators": [
		{
			"type": "runlog",
			"params": {
				"address": "0x2Bd355065fE6b4Df4CE7c12f15b9a9b2a8392037"
			}
		}
	],
	"tasks": [
		{
			"type": "wuwei_fil_wei"
		},
		{
			"type": "ethint256"
		},
		{
			"type": "ethtx"
		}
	]
}
```

```
MIT License
```

