### Запит
```json
{
	"sum": 10000,
	"from": 2,
	"to": 4
}
```

### Відповідь 
```json
[
  {
  	"status": "success",
  	"data": {
  		"databaseId": 567,
  		"sum": 10000,
  		"from": 2,
  		"to": 4
  	}
  },
  {
  	"status": "failed",
  	"data": {
  		"errorMessage": "Недостаточно средств",
  		"errorCode": 4
  	}
  }
]
```
