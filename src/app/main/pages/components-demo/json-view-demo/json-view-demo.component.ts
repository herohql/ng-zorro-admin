import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-view-demo',
  templateUrl: './json-view-demo.component.html',
  styleUrls: ['./json-view-demo.component.less']
})
export class JsonViewComponent implements OnInit {
  jsonObj = {
    "角色": {
        "名称": "管理员"
    },
    "菜单": [
        {
            "标题": "基因检测类型管理"
        },
        {
            "标题": "检测产品管理"
        },
        {
            "标题": "订单管理"
        },
        {
            "标题": "宣传图管理"
        },
        {
            "标题": "繁育计划"
        },
        {
            "标题": "订单管理"
        },
        {
            "标题": "新生犬列表"
        },
        {
            "标题": "犬只交易列表"
        },
        {
            "标题": "充值记录"
        },
        {
            "标题": "发票申请"
        },
        {
            "标题": "用户管理"
        },
        {
            "标题": "机构管理"
        },
        {
            "标题": "犬只管理"
        },
        {
            "标题": "徽章管理"
        },
        {
            "标题": "部门管理"
        },
        {
            "标题": "职员管理"
        },
        {
            "标题": "角色管理"
        },
        {
            "标题": "菜单管理"
        },
        {
            "标题": "日志管理"
        },
        {
            "标题": "菜单管理新增按钮"
        }
    ]
}
  constructor() { }

  ngOnInit(): void {
  }

}
